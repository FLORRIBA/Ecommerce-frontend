
import { Navigate } from "react-router-dom";
import {  NavLink } from 'react-router-dom' 
import logo from '../../assets/images/logos/LOGO.png'
import carrito from "../../assets/images/user-menu/carrito4.png" 
import usuario from "../../assets/images/user-menu/usuario2.png"
import LoginPage from '../../pages/Login/LoginPage'

// const links = [
//     { name: 'Gracias', path: '/home' },
//     { name: 'Acerca de', path: '/about-us' },
//     { name: 'Contacto', path: '/contact' },
//     { name: 'Registro', path: '/register' },
//     { name: 'AdminProduct', path: '/admin-product', admin: true },
//     { name: 'AdminUser', path: '/admin-user', admin: true },
// ]


// export default function Header() {
    
//     const user = JSON.parse(localStorage.getItem('currentUser'))

//     const isAdmin = user?.role === 'ADMIN_ROLE'

//     return (
//         <>
//             <header className='main-header'>
//                 <nav className='main-nav'>

//                     <ul className='nav-list'>

//                         {
//                             links.map((enlace, indice) => {
//                                 //si el usuario no es admin-no retorna nada
//                                 if(!isAdmin && enlace.admin) {
//                                     return null
//                                 }
//                                 //si el usuario es admin retorna el anlace
//                                 return (
//                                     <NavItem link={enlace} key={indice} />
//                                 )

//                             })
//                         }
//                     </ul>
//                 </nav>
//             </header>
//         </>
//     )

// }

export default function Header() {
    const isAdmin=true;

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
        <NavLink to='/login' className="user  user-name" >Login</NavLink>
            <img src={usuario} className="cart-user" alt="user.img" />
    
      
</div>

    </header>
   </>
  )

}

