
import { Navigate } from "react-router-dom";


//componente llamado y dentro ponemos otro elemento....
export default function AdminRoute({children}) {

  //obtuve del localStorage si el usuario es ADMIN-ROLE
    const isAdmin = true;
 
  return (
  //ternario = TRUE=> devuelvo children-admin-product: FALSE lo redirecciono a Home (lo redireccionamos)
    isAdmin?  children : <Navigate to='/' replace />
   
  )

}
