import { useOrder } from "../../context/OrderContext";
import React from "react";
import "./Cart.css";
import carrito from "../../assets/images/user-menu/carrito4.png";
import { useState} from "react";

const URL = import.meta.env.VITE_SERVER_URL;

export const Cart = () => {
	const [dbProducts, setDbProducts] = useState([]);
	const { order, cartMenu, total, totalItems, finishOrder, clearCart } =
		useOrder();

	return (
		<div className={`cart-wrapper  ${cartMenu ? "active" : ""} `}>
			<div className="list-container">
				<h2 className="main-title">Orden Actual</h2>

				<ul className="order-list">
					{order.map((prod, idx) => {
						return (
							<>
								<div className="section-product" key={idx}>
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
												// onClick={() => deleteOrder(prod.productId)}
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
