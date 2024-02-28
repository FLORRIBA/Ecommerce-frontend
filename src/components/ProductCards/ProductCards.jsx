const URL = import.meta.env.VITE_SERVER_URL;
import React from "react";
import formatDate from "@/utils/formatDate";
import { useOrder } from "../../context/OrderContext";
import { NavLink } from "react-router-dom";


export default function ProductCards({ product }) {
	// console.log(product.image);
	const { addItem } = useOrder();

	return (
		<>
			<article className="card" key={product._id}>
				<div className="imgBx">
					<img
						src={`${URL}/images/products/${product.image}`}
						alt=""
						className="box-img"
						loading="lazy"
					/>
				</div>
				<div className="card-container">
					<div className="card-info">
						<h2 className="card-info-title">{product.producto} </h2>
						<p className="card-info-text">{product.descripcion}</p>
					</div>
					<div className="card-values">
						<div className="card-date"> {formatDate(product.fecha)} </div>
						<div className="card-price">{product.precio} </div>
					</div>

					<footer className="card-footer">
						<NavLink							
							className="see-btn"
							to={`/product-detail/${product._id}`}
						>
							Ver más
						</NavLink>
						<button className="card-btn" onClick={() => addItem(product)}>
							Comprar
						</button>
					</footer>
				</div>
			</article>
		</>
	);
}
