
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'
import {useNavigate} from 'react-router-dom' //HOOK

export default function Login() {
 const navigate=useNavigate() //llamamos al Hook 

    function handleSubmit(event){
        //prevenimos por defecto el evento  submit
        event.preventDefault();
        const el = event.target.elements;

        const data ={
            email:el.email.value,
            password:el.password.value,
            }
        //llamo a la funcion login
        login(data)
        /*{
            email: user@gmail.com
            password:123
        }*/
    }

    //funcion async porque vamos a hacer una peticion al bck
    async function login(data){
        try{  //mandamos los datos al bck
                                              
            //servidor axios post + url del servidor http://localhost:3000 
            const response= await axios.post(import.meta.env.VITE_SERVER_URL + '/login' , data)
           //destructurar
            const { token,user } = response.data;
            //guardamos las variables en el localS
            localStorage.setItem('token',token)  //guardamos un objeto
            localStorage.setItem('currentUser', JSON.stringify(user))
            
           Swal.fire({
            title:'Login correcto',
            text:'Sera redireccionado',
            icon:'success',
            timer:1500,
            confirmButtonColor:'#ffe4c4'
        
           }).then(()=>{
           navigate('/') //redireccionamos al path raiz
           })
        }catch(error){
            console.log(error)
            Swal.fire({
                title:'Error al ingresar',
                text:'Algunos de los datos son incorrectos',
                icon:'error'
            })
        }

    }
  return (
    <>

<body className="body-login">
    <div className="input-wrapper">
        <h1 className="login-title">Ingresar</h1>
        <form action="" className="login-form" id="login-form" onSubmit= {handleSubmit} >
            <div className="input-group">
                <label htmlFor="email">Correo electonico</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Pasword</label>
                <input type="password" name="password" id="password" required/>
            </div>

            <button type="submit" className="btn-form">Ingresar</button>
        </form>
    </div>

</body>

    </>
  )
}

