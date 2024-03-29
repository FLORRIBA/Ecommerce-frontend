import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login.jsx";
import AdminUser from "./pages/AdminUser/AdminUser";
import AdminProduct from "./pages/AdminProduct/AdminProduct";
import AdminRoute from "./Guard/AdminRoute/AdminRoute";
// import  Header  from "./Layout/Header/Header";
import {Header} from "./Layout/Header/Header";

import Footer from "./Layout/Footer/Footer";
import LoginPage from "./pages/Login/LoginPage";
import { Cart } from "./Layout/Cart/Cart";
import { Order } from "./Layout/Order/Order"; //cuando exporto una constante lo pongo entre{}
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";

export default function App() {
	return (
		<>
			<Header />
			<Cart />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/orders" element={<Order />} />
				<Route path="/product-detail/:id" element={<ProductDetail />} />
				<Route path="/login-page" element={<LoginPage />} />
				<Route path="/register" element={<Register />} />

				<Route
					path="/admin-user"
					element={
						<AdminRoute>
							<AdminUser />
						</AdminRoute>
					}
				/>
				<Route
					path="/admin-product"
					element={
						<AdminRoute>
							<AdminProduct />
						</AdminRoute>
					}
				/>
			</Routes>

			<Footer />
		</>
	);
}
