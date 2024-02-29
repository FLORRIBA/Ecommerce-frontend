
import { useState } from 'react';
import Swal from 'sweetalert2';
// import Login from './Login';


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
// VER SAQUE ESTO
// user.password = undefined;

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

  
  export default LoginPage