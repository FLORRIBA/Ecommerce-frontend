import { useOrder } from "@/context/OrderContext";
import React from "react";
import './Cart.css'

export const Cart = () => {
	const { order, cartMenu, total } = useOrder();


	return (
		<div className={`cart-wrapper  ${cartMenu ? "active" : ""} `}>
			<ul>
				{order.map((prod) => {
					return (
						<>
							<li key={prod.productId}>{prod.productName}</li>
						<span className="ml-auto">
                            {prod.quantity}
                        </span>
                        </>
					);
				})}
			</ul>
            <div>{total} </div>
		</div>
	);
};
