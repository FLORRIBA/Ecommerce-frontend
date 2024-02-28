import React from "react";
import defaultPicture from "../../assets/images/avatar/usuario.jpg";

const URL = import.meta.env.VITE_SERVER_URL;

export default function UserTableRow({
	usr,
	deleteUser,
	setFormValueFn,
	
}) {
	return (
		<>
			<tr key={usr._id}>
				{/* FILAS de la TABLA*/}
				<td>
					<img
						className="tablePicture"
						src={`${URL}/images/users/${usr.image}`}
					/>
				</td>
				<td> {usr.name} </td>
				<td> {usr.email} </td>
				<td> {usr.location ? usr.location : <span>No Data</span>}</td>
				<td> {usr.age} </td>
				<td> {usr.role} </td>
				<td>
					<button
						className="action-btn btn-danger"
						onClick={() => deleteUser(usr._id)}
						title="Borrar usuario"
					>
						<i className="fa-solid fa-trash-can"></i>
					</button>
					{/*llamamos a la f setFormValue que viene del elemento padre AdminUser y le enviamos el usr */}
					<button
						className="action-btn btn-edit"
						onClick={() => setFormValueFn(usr)}
						title="Editar usuario"
					>
						<i className="fa-solid fa-pen-to-square"></i>
					</button>
				</td>
			</tr>
		</>
	);
}
