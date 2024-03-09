import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const URL = import.meta.env.VITE_SERVER_URL;

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const savedUser = JSON.parse(localStorage.getItem("currentUser"));
		return savedUser || null;
	});
	const [admin, setAdmin] = useState(() => {
		const savedUser = JSON.parse(localStorage.getItem("currentUser"));
		return savedUser?.role === "ADMIN_ROLE";
	});
	const navigate = useNavigate();

	async function login(data) {
		try {
			//URL en el path login le mandamos la data
			const response = await axios.post(`${URL}/login`, data);
			//destructuracion de la respuesta de la data, lo que brinda el back
			const { token, user } = response.data;
			localStorage.setItem("token", token);
			localStorage.setItem("currentUser", JSON.stringify(user));
			//Defino si esl usuario es Admin preguntando por su rol
			const isAdmin = user.role === "ADMIN_ROLE";
			//seteo el estado Admin con el valor de la comprobacion anterior
			setAdmin(isAdmin);
			//seteo con lo que recibi en la respuesta data
			setUser(user);

			Swal.fire({
				title: "Login correcto ",
				text: "Sera redireccionado en breve",
				icon: "success",
				timer: 1500,
			}).then(() => {
				navigate("/");
			});
		} catch (error) {
			console.log(error);
			Swal.fire({
				title: "Error al ingresar ",
				text: "Algunos de los datos son incorrectos",
				icon: "error",
			});
		}
	}

	function logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("currentUser");
		setUser(null);
	}

	return (
		//return de mi UserContext como un proveedor, va a compratir valores a children (mi app-main)
		<UserContext.Provider value={{ user, admin, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
