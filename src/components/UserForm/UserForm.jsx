import React from "react";
import { useForm } from "react-hook-form"; //LIBRERIA DE REACT
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TOKEN = localStorage.getItem("token"); //variable global para mi componente para usar el TOKEN en distintas peticiones.
const URL = import.meta.env.VITE_SERVER_URL;

//traigo f getUsers como props desde Adminuser
const UserForm = ({ getUsers, formValue, userId, setUserId }) => {
	// handleSubmit to hold the input value *- setValue =>setear los valores al formulario
	const { register, handleSubmit, setValue } = useForm();
	const navigate = useNavigate();

	//-Obtener data del formulario y hacer un PUT o POST
	async function submitedData(data) {

		try {
			const formData = new FormData();

			formData.append("name", data.name);
			formData.append("email", data.email);
			formData.append("location", data.location);
			formData.append("age", data.age);

			if (!userId) {
				formData.append("password", data.password);
			}
			if (
				data.image &&
				data.image.length > 0 &&
				data.image[0] instanceof File
			) {
				formData.append("image", data.image[0]);
			}

			//-PUT: EDITAR usuario
			if (userId) {
				if (!TOKEN) return; //si NO HAY TOKEN cancelo
				//metodo PUT ()Postman
				const response = await axios.put(`${URL}/users/${userId}`, formData, {
					headers: { authorization: TOKEN },
				});
				console.log(response);

				Swal.fire({
					icon: "success",
					title: "Usuario editado correctamente ",
					text: `El usuario ${response.data.user?.name} fue editado correctamente`,
				});

				getUsers();

				setUserId(null);

				return;
			}

			//-POST: CREAR usuario
			const response = await axios.post(`${URL}/users`, formData); //enviamos al back
			Swal.fire({
				icon: "success",
				title: "Usuario creado ",
				text: `El usuario ${response.data.user?.name} fue creado correctamente`,
			});
			// reset();
			/*condicional:
			-AdminUser=> solo obtener usuarios(recargar la TABLA) cuando a mi componente getUsers le mandemos la props como en AdminUser <UserForm getUsers={getUsers} /> 
			-Register => no se lo enviamos, getUser es UNDEFINED no entra al if y no llama a la TABLA	*/
			if (getUsers) {
				getUsers();
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se creo usuario",
				text: "Algunos datos ingresados no son correctos",
			});
			if (error.response.status === 401) {
				// logout();
				localStorage.removeItem("currentUser");
				localStorage.removeItem("token");
				navigate("/");

				//logout()
				localStorage.removeItem("currentUser");
				localStorage.removeItem("token");
				navigate("/");
				// logout();
				localStorage.removeItem("currentUser");
				localStorage.removeItem("token");
				navigate("/");
			}
		}
	}

	if (formValue) {
		setValue("name", formValue.name);
		setValue("email", formValue.email);
		setValue("password", formValue.password);
		setValue("location", formValue.location || "");
		setValue("age", formValue.age);
		setValue("image", formValue.image || "");
	}

	return (
		<>
			<section className="form-container">
				<form
					id="user-form"
					onSubmit={handleSubmit(submitedData)}
					encType="multipart/form-data"
				>
					<div className="input-wrapper">
						<label htmlFor="name">Nombre Completo</label>
						<input
							type="text"
							{...register("name")} //user.model-backend
							id="name"
							minLength="5"
							maxLength="60"
							required
							pattern="^[a-zA-Z]+( [a-zA-Z]+)*$"
							autoFocus
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="email">E-mail</label>
						<input
							type="email"
							{...register("email")} //user.model-backend
							id="email"
							minLength="5"
							maxLength="140"
							required
							pattern="[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Contraseña</label>
						<input
							type="password"
							{...register("password")} //user.model-backend
							id="password"
							disabled={!!userId} //cuando se esta editando deshabilito la contraseña.
							required
						/>
					</div>

					<div className="input-wrapper">
						<label htmlFor="location">Localidad</label>
						<select {...register("location")} id="location" required>
							<option value=""></option>
							<option value="Buenos Aires">Buenos Aires</option>
							<option value="Mendoza">Mendoza</option>
							<option value="San Luis">San Luis</option>
							<option value="Cordoba">Cordoba</option>
							<option value="La Pampa">La Pampa</option>
							<option value="Rosario">Rosario</option>
						</select>
					</div>

					<div className="input-wrapper">
						<label htmlFor="age">Edad</label>
						<input type="number" {...register("age")} id="age" required />
					</div>

					<div className="input-wrapper">
						<label htmlFor="image">Imagen</label>
						<input
							type="file" //carpeta de imagenes
							accept="image/*" //mostrar archivos en el explorador cuya extencion sea de tipo imagen
							{...register("image")}
							id="image"
						/>
					</div>

					<div className="active">
						<label htmlFor="active">Activo</label>
						<input type="checkbox" {...register("active")} id="active" />
					</div>
					<button type="submit" className={userId ? "btn-success" : "btn-form"}>
						{
							userId ? "Editar usuario" : "Agregar Usuario" //existe id Editar, no existe Añadir
						}
					</button>
				</form>
			</section>
		</>
	);
};
export default UserForm;
