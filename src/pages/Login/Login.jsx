import LoginPage from '../Login/LoginPage'
import { useState } from 'react';
import Swal from 'sweetalert2';


export default function Login() {
  return (
    <>

<body className="body-login">
    <div className="input-wrapper">
        <h1 className="login-title">Ingresar</h1>
        <form action="" className="login-form" id="login-form">
            <div className="input-group">
                <label htmlFor="email">Correo electonico</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Pasword</label>
                <input type="password" name="password" id="password" required/>
            </div>

            <button type="submit" className="btn-form"
                onClick={()=>{
                    const LoginPage = () => {
  
 
                        const [email, setEmail] = useState('');
                         
                        const [password, setPassword] = useState('');
                        
                          const handleLogin = (evt) => {
                            evt.
                          
                        preventDefault();
                        
                            const users = JSON.parse(localStorage.getItem("users")) || [];
                            
                            
                        const user = users.find((usr) => usr.email.toLowerCase() === email.toLowerCase());
                        
                            
                        
                         
                        if (!user || user.password !== password) {
                              
                         
                        Swal.fire({
                        
                        title: "Login Incorrecto",
                        text: "Datos ingresados incorrectos",
                        icon: "error",
                        timer: 2000,
                              });
                              
                              };
                             
                        return;
                            }
                        
                        user.password = undefined;
                        
                        localStorage.setItem("currentUser", JSON.stringify(user));
                        
                        Swal.fire({
                        
                        title: "Login Correcto",
                        text: "Sera redireccionado en un momento",
                        icon: "success",
                        timer: 2000,
                            });
                        
                        setTimeout(function () {
                              
                              
                        window.location.href = "/";
                            }, 1500);
                          };
                        


                }}

            
            
            >Ingresar</button>
        </form>
    </div>

</body>

    </>
  )
}

