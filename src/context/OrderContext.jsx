import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState([]);
	const [cartMenu, setCartMenu] = useState(false); //togglemenu
	const [total, setTotal] = useState(0);
    const[totalItems, setTotalItems]=useState(0)

	function addItem(item) {
		console.log(item);
		//-Añado un elemento a mi orden

		if (order.findIndex((prod) => prod.productId === item._id) >= 0) {
			const newOrder = order.map((producto) => {
				if (producto.productId === item._id) {
					return { ...producto, quantity: producto.quantity +1};
				}
                return producto;

			})
            calculatetTotal();
            setOrder(newOrder);
            return
			// const product = order.find((prod) => prod.productId === item._id);
			// product.quantity += 1;

			// setOrder([...order]);
			// calculatetTotal() //cada vez que agrego una cantidad
			// return;
		}
		const product = {
			productId: item._id,
			quantity: 1,
			price: item.precio,
			productName: item.producto,
		};
        //-Agrego un producto
		setOrder((orders) => [...orders, product]); //nuevo array con todas las ordenes  q habia mas el nuevo producto
		calculatetTotal();
        calculatetTotal();
	}

    function calculateTotalItems(){
        const totales= order.reduce((total,producto)=>{
        total += producto.quantity;
        },0)
        setTotalItems(totales)
    }

	function calculatetTotal() {
		//acc-acumulador
		const totalAcc = order.reduce((acc, producto) => {
			acc += producto.precio * producto.quantity;
			return acc;
		}, 0);
		setTotal(totalAcc);
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
				cartMenu,
				total,
                totalItems,
				addItem,
				removeItem,
				clearCart,
				toggleMenu,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderProvider;
