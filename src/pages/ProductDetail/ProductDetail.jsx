import React from "react";
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
			const response = await axios.get(`http://localhost:3000/products/${id}`);
			console.log(response.data.product);

			const product = response.data.product;

			setProduct(product);
		} catch (error) {
			console.log(error);
		}
	}
	return <div>
        <h1> {product.producto} </h1>
        </div>;
};
