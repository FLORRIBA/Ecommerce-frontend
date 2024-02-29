import { useOrder } from "../../context/OrderContext";
import React from "react";
import "./Cart.css";
import carrito from "../../assets/images/user-menu/carrito4.png";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_SERVER_URL;

export const Cart = () => {
	const [dbProducts, setDbProducts] = useState([]);
	const {
		order,
		cartMenu,
		total,
		totalItems,
		finishOrder,
		clearCart,
		
	} = useOrder();
	console.log("Order", order);

	// async function deleteOrder(ProductId) {
	// 	Swal.fire({
	// 		title: "Confirma borrar el producto",
	// 		text: `Realmente desea borrar el producto ${ProductId}`,
	// 		icon: "warning",
	// 		showDenyButton: true,
	// 		confirmButtonText: "Borrar",
	// 		confirmButtonColor: "#e06262",
	// 		denyButtonText: `Cancelar`,
	// 		// reverseButtons: true, // invertir botones borrar y cancelar
	// 	}).then(async function (resultado) {
	// 		if (resultado.isConfirmed) {
	// 			try {
	// 				Swal.fire({
	// 					icon: "success",
	// 					title: "Producto borrado",
	// 					text: `El producto ${ProductId} fue borrado correctamente`,
	// 					timer: 1500,
	// 				});
	// 				//-Actualizar el estado de Productos
	// 				// getOrders();
	// 			} catch (error) {
	// 				Swal.fire({
	// 					icon: "error",
	// 					title: "Error al borrar el producto",
	// 					text: `No se pudo borrar el producto ${ProductId}`,
	// 				});
	// 			}
	// 		} //cierra if
	// 	}); //cierra then
	// }

	// async function getOrders() {
	// 	try {
	// 		const response = await axios.get(`${URL}/orders`);
	// 		console.log(response.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// useEffect(() => {
	// 	//controlo la carga de usuario
	// 	getOrders();
	// 	//prevengo el bucle infinito
	// }, []);

	return (
		<div className={`cart-wrapper  ${cartMenu ? "active" : ""} `}>
			<div className="list-container">
				<h2 className="main-title">Orden Actual</h2>

				<ul className="order-list">
					{order.map((prod) => {
						return (
							<>
								<div className="section-product">
									<img
										className="tablePicture"
										src={`${URL}/images/products/${prod.image}`}
										alt={prod.productName}
									/>
									<div className="prod-name">{prod.productName}</div>
									<div className="order-quantity">
										{prod.quantity}
										<div className="action-btn btn-danger">
											<i
												className="fa-solid fa-trash-can"
												onClick={() => deleteOrder(prod.productId)}
											></i>
										</div>
									</div>
								</div>
								<div className="linea"></div>
							</>
						);
					})}
				</ul>

				<div className="order-finish">
					<div className="total-count">Items:{totalItems} </div>
					<div className="total-price">
						Total $ <span> {total} </span>
					</div>
				</div>
				<div className="order-purchase">
					<a className="card-btn" onClick={() => clearCart()}>
						<i className="fa-solid fa-broom"></i>
					</a>
					<button className="card-btn" onClick={() => finishOrder()}>
						<img src={carrito} className="cart-user"></img>
					</button>
				</div>
			</div>
		</div>
	);
};
