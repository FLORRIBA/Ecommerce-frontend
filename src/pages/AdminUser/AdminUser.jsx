import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"; //LIBRERIA DE REACT
import Swal from "sweetalert2";
import axios from "axios";
import UserTable from "../../components/UserTable/UserTable";
import UserForm from "../../components/UserForm/UserForm";
import {useNavigate} from "react-router-dom"

const URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = localStorage.getItem("token");

export default function AdminUser() {
// State to hold the user data *-Usamos el useStategancho para crear una variable de estado dbUsers y una función setDbUserspara actualizarla.
	const [dbUsers, setDbUsers ] = useState([]); //Estado() inicializado como un array vacio.	
	// const [userId, setUserId]=useState() //deshabilitar el Password al editar
	const [formValue, setFormValue] = useState()
	const navigate=useNavigate()

	async function deleteUser(id) {
		Swal.fire({
			title: "Confirma borrar el usuario",
			text: `Realmente desea borrar el usuario ${id}`,
			icon: "warning",
			showDenyButton: true,
			confirmButtonText: "Borrar",
			confirmButtonColor: "#e06262" ,
			denyButtonText: `Cancelar`,
			reverseButtons: true,// invertir botones borrar y cancelar
		}).then(async function (resultado) {
			//cuando la persona "confirmo"
			if (resultado.isConfirmed) {
				try {
					
					if (!TOKEN) return;
					//-Borrar usuario en la BD
					await axios.delete(`${URL}/users/${id}`, {
						headers: { authorization: TOKEN }, //objeto opciones, tiene la propiedad header{}
					});
					Swal.fire({
						icon: "success",
						title: "Usuario borrado",
						text: `El ususario ${id} fue borrado correctamente`,
					});
				//-Actualizar el estado de usuarios
					getUsers();

				} catch (error) {
					console.log(error);
					Swal.fire({
						icon: "error",
						title: "Error al borrar el usuario",
						text: `No se pudo borrar el usuario ${id}`,
					});
					if(error.response.status===401) return logout()
				}
			} //cierra if
		}); //cierra then
	} 
	
	function logout(){	
			localStorage.removeItem("currentUser");
			localStorage.removeItem("token");
			navigate("/");
		
	}

	//-Obtener Usuarios
	async function getUsers() {
		try {
			const response = await axios.get(`${URL}/users`);
			const users = response.data.users;

			setDbUsers(users);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los usuario",
			});
		}
	}
	
	useEffect(function () {
		//controlo la carga de usuario
		getUsers();
		//prevengo el bucle infinito
	}, []);

	// const { setValue } = useForm();

	async function setFormValueFn(user){ //esta f le va a "setear"al StateFormValue un  uevo valor que es el usuario que recibio para editar
		console.log(user)
		//iteramos propiedades
		setFormValue(user)
		
	}

	return (
		<>
			<main>
				<div className="input-container  input-wrapper">
					<input
						type="text"
						className="input"
						id="search"
						placeholder="Buscar por nombre"
					/>
				</div>
				<div className="admin-container">
					{/*FORMULARIO */}
					<UserForm getUsers={getUsers} formValue={formValue} />
					{/* TABLA */}
					{/*paso unas props y su valor es la funcion */}
					<UserTable users={dbUsers} deleteUser={deleteUser} setFormValueFn={setFormValueFn}  />
				</div>
			</main>
		</>
	);
}
