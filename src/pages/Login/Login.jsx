
import { useUser } from '@/context/UserContext';

export default function Login() {
    const {login}=useUser();
 
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
      
    }

    //funcion async porque vamos a hacer una peticion al bck
   
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
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
            </div>

            <button type="submit" className="btn-form">Ingresar</button>
        </form>
    </div>

</body>

    </>
  )
}

