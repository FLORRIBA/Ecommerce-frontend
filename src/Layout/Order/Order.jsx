import UserTable from "@/components/UserTable/UserTable";
import { useEffect } from "react";
import axios from "axios";

export const Order = () => {
	const URL = import.meta.env.VITE_SERVER_URL;

	useEffect(() => {
		getOrders();
	}, []);

	async function getOrders() {
		try {
			const response = await axios.get(`${URL}/orders`);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="table-container">
				<div className="flex-between">
					<h2>Ordenes</h2>
					{/* <UserTable
            users={dbUsers}
            deleteUsers={deleteUser}
            fnSetFormValue={fnSetFormValue}> /</UserTable> */}
				</div>
			</div>
		</>
	);
};
