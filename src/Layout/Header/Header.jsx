import { useUser } from "@/context/UserContext";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logos/LOGO.png";
import carrito from "../../assets/images/user-menu/carrito4.png";
import usuario from "../../assets/images/user-menu/usuario2.png";
import { useOrder } from "@/context/OrderContext";
import "./Header.css";

export const Header = () => {
	const { toggleMenu, totalItems } = useOrder();
	const { user, logout } = useUser();

	const isAdmin = user ? user.role === "ADMIN_ROLE" : false;

	return (
		<>
			<header className="main-header">
				<input
					className="input-check"
					type="checkbox"
					name=""
					id="check-menu"
				/>
				<label className="label-menu" htmlFor="check-menu">
					<div className="burger-line">
						<img className="nav-logo" src={logo} alt="logo.img" />
					</div>
				</label>

				<nav className="main-nav" id="header-nav">
					<ul className="nav-list">

						<NavLink to="/" className="nav-link">
							Gracias
						</NavLink>
						<NavLink to="/about-us" className="nav-link">
							Acerca
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contacto
						</NavLink>
						{!user && (
							<NavLink to="/register" className="nav-link">
								Registro
							</NavLink>
						)}

						{isAdmin && (
							<>
								<NavLink to="/admin-product" className="nav-link">
									Admin Product
								</NavLink>
								<NavLink to="/admin-user" className="nav-link">
									Admin User
								</NavLink>
							</>
						)}
					</ul>
				</nav>

				<div className="user-admin"></div>
				<div className="user-menu" id="header-user">
					{user ? (
						<>
							<NavLink
								className="cart-shopping "
								data-count={totalItems}
								href="#"
							>
								<img
									src={carrito}
									className="cart-user"
									onClick={() => toggleMenu()}
									alt="cart.img"
								/>
							</NavLink>

							<NavLink className="header-link" onClick={() => logout()}>
								<img src={usuario} className="cart-user" alt="user.img" />
							</NavLink>
						</>
					) : (
						<NavLink to="/login" className="user  user-name">
							<img src={usuario} className="cart-user" alt="user.img" />
						</NavLink> //sino tengo pinto boton login
					)}
				</div>
			</header>
		</>
	);
};
