
import { useNavigate, NavLink } from "react-router-dom";
import logo from '../../assets/images/logos/LOGO.png'
import carrito from "../../assets/images/user-menu/carrito4.png" 
import usuario from "../../assets/images/user-menu/usuario2.png"
// import LoginPage from '../../pages/Login/LoginPage'



export default function Header() {
    const navigate=useNavigate()
    const isAdmin=true;
    const currentUser=JSON.parse(localStorage.getItem('currentUser'));
    
   function logout(){
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        navigate('/')
    }
 
 
    return (
    <>
    <header className='main-header'>

        <input className="input-check" type="checkbox" name="" id="check-menu"/>
    <label className="label-menu" htmlFor="check-menu">
        <div className="burger-line">
            <img className="nav-logo" src={logo}alt="logo.img"/>
        </div>
    </label>

    <nav className="main-nav" id="header-nav">
        <ul className="nav-list">
        {/* <NavLink to="/" className={ ({isActive}) => isActive ? "nav-link active" : "nav-link" }>Gracias</NavLink> */}
        
        <NavLink to="/" className="nav-link">Gracias</NavLink>
        <NavLink to="/about-us" className="nav-link">Acerca</NavLink>
        <NavLink to="/contact"  className="nav-link">Contacto</NavLink>
        <NavLink to="/register" className="nav-link">Registro</NavLink>

{isAdmin && ( 
        <>
        <NavLink to="/admin-product" className="nav-link">Admin Product</NavLink>
        <NavLink to="/admin-user" className="nav-link">Admin User</NavLink>
        </>
)}
        </ul>
    </nav>
   
  
  <div className="user-admin"></div>

  <div className="user-menu" id="header-user">

        <NavLink className="cart-shopping" href="#">
            <img src={carrito} className="cart-user" alt="cart.img" /></NavLink>

        <div className="user-action"></div>
        
        {currentUser?(
         <NavLink className="header-link" onClick ={() => logout()}>Logout
        {/* <img src={usuario} className="cart-user" alt="user.img" /> */}
        </NavLink> //si tengo current User pinto boton logout
        ) : (
        <NavLink to='/login' className="user  user-name" > 
        <img src={usuario} className="cart-user" alt="user.img" />
        </NavLink> //sino tengo pinto boton login
        )}
   
      
</div>

    </header>
   </>
  )

}

