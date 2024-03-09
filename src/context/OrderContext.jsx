import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
import Swal from "sweetalert2";
import axios from "axios";

const URL = import.meta.env.VITE_SERVER_URL;

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
	const { user } = useUser();

	const [order, setOrder] = useState(
		() => JSON.parse(localStorage.getItem("order")) || [],
	);
	const [cartMenu, setCartMenu] = useState(false); //togglemenu
	const [total, setTotal] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		calculateTotalItems();
		calculatetTotal();
	}, [order]);

	function addItem(item) {
		console.log(item);
		//-Añado un elemento a mi orden (array con mis productos guardados)
		const itemIndex = order.findIndex((prod) => prod.productId === item._id); //nos fijamos si el producto ya esta en el carrito
		let newOrder;

		if (itemIndex > 0) {
			//si encontre un index (0 o mayor)
			newOrder = order.map((producto) => {
				console.log(itemIndex);
				//la nueva orden va ser generar un nuevo array, si el item ya existia en mi carrito, le sumo 1 a la cantidad
				if (producto.productId === item._id) {
					console.log(producto);
					return { ...producto, quantity: producto.quantity + 1 }; //a ese producto le agrego la cantidad +1
				}
				return producto;
			});
		} else {
			//y el resto de los productos los retorno tal cual
			const product = {
				//schema de orden
				productId: item._id,
				quantity: 1,
				price: item.precio,
				productName: item.producto,
				image: item.image,
			};
			newOrder = [...order, product];
		}

		localStorage.setItem("order", JSON.stringify(newOrder));
		setOrder(newOrder);
	}

	function calculateTotalItems() {
		let totalItems = 0;
		order.forEach((prod) => {
			totalItems += prod.quantity;
		});
		setTotalItems(totalItems);
	}

	function calculatetTotal() {

		let total = 0;
		order.forEach((prod) => {
			total += prod.price * prod.quantity;
		});
		setTotal(total);
	}

	async function finishOrder() {
		try {
			// if (!user)
			// 	return Swal.fire(
			// 		"Debe loguearse",
			// 		"Para finalizar la orden debe estar logueado",
			// 		"error",
			// 	);

			const newOrder = {
				userId: user._id,
				total: total,
				products: order,
			};
			const response = await axios.post(`${URL}/orders`, newOrder);
			console.log(newOrder);

			Swal.fire({
				icon: "success",
				title: "Compra realizada",
				text: "Gracias por su compra",
			});

			clearCart();
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "Oops..",
				text: "Algo salio mal!",
			});
		}
	}

	function removeItem(id) {
		//buscar en el array el item y eliminarlo y actualizar el estado de orden
	}

	function clearCart() {
		//limpio mi carrito de compras
		setOrder([]);
	}

	function toggleMenu() {
		setCartMenu(!cartMenu); //forma de negar
	}

	return (
		<OrderContext.Provider
			value={{
				order,
				cartMenu, // -estado true/false para mostrar el carrito
				total,
				totalItems,
				addItem,
				removeItem,
				clearCart,
				toggleMenu,
				finishOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
export default OrderProvider;
