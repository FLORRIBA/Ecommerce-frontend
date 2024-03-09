import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import UserTable from "../../components/UserTable/UserTable";
import UserForm from "../../components/UserForm/UserForm";

const TOKEN = localStorage.getItem("token");

const URL = import.meta.env.VITE_SERVER_URL;

const AdminUser = () => {
	const [dbUsers, setDbUsers] = useState([]); //Estado() inicializado como un array vacio.
	const [userId, setUserId] = useState(); //deshabilitar el Password al editar
	const [formValue, setFormValue] = useState();

	async function deleteUser(id) {
		Swal.fire({
			title: "Confirma borrar el usuario",
			text: `Realmente desea borrar el usuario ${id}`,
			icon: "warning",
			showDenyButton: true,
			confirmButtonText: "Borrar",
			confirmButtonColor: "#e06262",
			denyButtonText: `Cancelar`,
		}).then(async function (resultado) {
			if (resultado.isConfirmed) {
				try {
					if (!TOKEN) return; //token guardado en el localStorage
					console.log(`usuario a borrar ${id}`);
					//-Borrar usuario en la BD
					await axios.delete(`${URL}/users/${id}`, {
						headers: { authorization: TOKEN }, //objeto opciones, tiene la propiedad header{}
					});

					Swal.fire({
						icon: "success",
						title: "Usuario borrado",
						text: `El ususario ${id}fue borrado correctamente`,
						timer: 1500,
					});

					//-Actualizar el estado de usuarios
					getUsers();
				} catch (error) {
					Swal.fire({
						icon: "error",
						title: "Error al borrar el usuario",
						text: `No se pudo borrar el usuario ${id}`,
					});
				}
			}
		});
	}

	//-Obtener Usuarios
	async function getUsers() {
		try {
			const response = await axios.get(`${URL}/users`);
			const users = response.data.users;

			setDbUsers(users);

			console.log(response.data.users);
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

	async function setFormValueFn(user) {
		//esta f le va a "setear"al StateFormValue un nuevo valor que es el usuario que recibio para editar

		//iteramos propiedades
		setFormValue(user);
		setUserId(user._id);
	}

	async function handleSearch(e) {
		try {
			const search = e.target.value;
			if (!search) getUsers(); //si mi input quedo vacio (""), que me traiga todos los usuarios
			if (search.length <= 3) return; //que busque solo a partir de 3 letras
			const response = await axios.get(`${URL}/users/search/${search}`);
			const users = response.data.users;

			setDbUsers(users); //actualizamos los usuarios
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<main className="main-container">
				<div className="admin-container">
					{/*FORMULARIO */}
					<UserForm
						getUsers={getUsers}
						formValue={formValue}
						userId={userId}
						setUserId={setUserId}
					/>
					{/* TABLA */}
					<section className="table-container">
						<div className="flex-between">
							<div className="input-group">
								<input
									type="text"
									className="input-search"
									id="search"
									placeholder="Buscar por nombre"
									onKeyUp={handleSearch}
								/>
							</div>
						</div>
						{/*paso unas props y su valor es la funcion */}
						<UserTable
							users={dbUsers}
							deleteUser={deleteUser}
							setFormValueFn={setFormValueFn}
							handleSearch={handleSearch}
						/>
					</section>
				</div>
			</main>
		</>
	);
};
export default AdminUser;
