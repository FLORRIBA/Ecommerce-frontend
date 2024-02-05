import React from "react";
import UserTableRow from "../../components/UserTableRow/UserTableRow";

//users=lo recibo como una props
export default function UserTable({ users, deleteUser, setFormValueFn }) {

    // deleteUser('un ID desde el componente hijo UserTable');

	return (
		<>
			<section className="table-container">
				<table className="user-table" id="userTable">
					<thead>
                    {/* Primer Columna de la Tabla  */}
						<tr className="table-head"> 
							<th>Avatar</th>
							<th>Nombre Completo</th>
							<th>Email</th>
							<th>Localidad</th>
							<th>Edad</th>
							{/* <th>Fecha Nacimiento</th> */}
                            <th>Roles</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody id="table-body">
						{
							//users es un array de usuarios
							users.map((usr) => (
                        //le pasamos la key   usr = usr que estoy iterando en este map 
								<UserTableRow key={usr._id} 
						//paso Props y su valor es la funcion 
								usr={usr} 
								deleteUser={deleteUser} 
								setFormValueFn={setFormValueFn}  />
							))
						}
					</tbody>
				</table>
			</section>
		</>
	);
}
