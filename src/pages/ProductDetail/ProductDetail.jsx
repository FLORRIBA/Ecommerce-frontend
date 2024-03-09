import imagen from "../../assets/images/product-detail/imagen.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_SERVER_URL;

export const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		getProductDetail(id);
	}, [id]);

	async function getProductDetail(id) {
		try {
			const response = await axios.get(`${URL}/products/${id}`);

			const product = response.data.product;

			setProduct(product);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="product-detail-container">
			<div className="img-card">
				<img
					src={`${URL}/images/products/${product.image}`}
					alt=""
					id="main-img"
				/>

				{/* <div className="small-card">
					<img
						src={imagen}
						alt=""
						className="small-img"
					/>
					<img
						src="../../assets/images/product-detail/shampoo.png"
						alt=""
						className="small-img"
					/>
					<img
						src="../../assets/images/product-detail/cepillo2.png"
						alt=""
						className="small-img"
					/>
					<img
						src="../../assets/images/product-detail/pasta-dental.png"
						alt=""
						className="small-img"
					/>
				</div> */}
			</div>

			<div className="product-info">
				<h3>{product.producto}</h3>
				<p>{product.descripcion}</p>
				<h5> $ {product.precio}</h5>

				<div className="quantity">
					<input type="number" min="1" />
					<button className="quantity-btn">Comprar</button>
				</div>
			</div>
		</section>
	);
};
