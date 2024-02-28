{/* <div className="user-admin"></div>
<div className="user-menu  user-info" id="header-user">
    {user ? (
        <>
            <div className="cart-shopping icon-container" href="#">
                <i
                    data-count={totalItems}
                    src={carrito}
                    className="cart-icon"
                    onClick={() => toggleMenu()}
                    alt="cart.img"
                />
            </div>
            <div className="dropdown-menu user-avatar">
                <img
                    src={`${URL}/images/users/${user.image}`}
                    alt={user.name}
                />
                <div className="dropdown-links">
                    <NavLink to="/orders" className="nav-link">
                        <i className="fa-solid  fa-dolly"></i>
                        Ordenes
                    </NavLink>
                    <a className="nav-link" onClick={() => logout()}>
                        <i className="pointer fa-solid fa-arrow-right-from-bracket"></i>
                        Logout
                    </a>
                </div>
            </div>
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
} */}