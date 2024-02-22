
import axios from "axios";
import { useState, useEffect} from 'react'; 
import ProductCards from "../ProductCards/ProductCards";
// import react from "@vitejs/plugin-react-swc";

export const ProductCardsContainer = () =>{
                                 //product inicialmente va a ser un array vacio
    const [products, setProducts] = useState([]);

 //HOOK se ejecuta una function(en base a q..., cuando se actualice q... ) cuando se crea el componente 
    useEffect(function(){
    //controlo la carga de productos
        getProducts()
    //prevengo el bucle infinito
    }, [])

    async function getProducts(){
        try{
            //pedido al backend de los usuarios para pintarlos
            const response= await axios.get('http://localhost:3000/products')
            
            //funcion actualizar estado de los productos
            setProducts(response.data.products);         
            

        }catch (error){
            console.log(error)
        }
    }

   
    return (
        <>
         <section className="card-section">

            {
            products.map(product=>{
                return(
                   //llamar al componente ProductCards
                   <ProductCards product={product} key={product._id}/>

                )
            })
            }
        </section>
        </>
        
    )
}
export default ProductCardsContainer