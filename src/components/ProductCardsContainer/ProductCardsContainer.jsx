
import axios from "axios";
import { productState, productEffect} from 'react'; 
import ProductCards from "../ProductCards/ProductCards";
// import react from "@vitejs/plugin-react-swc";


export const ProductCardsContainer = () =>{
                                 //product inicialmente va a ser un array vacio
    const [products, setProducts] = productState([]);

 //HOOK se ejecuta una function(en base a q..., cuando se actualice q... ) cuando se crea el componente 
    productEffect(function(){
    //controlo la carga de productos
        getProducts()
    //prevengo el bucle infinito
    }, [])

    async function getProducts(){
        try{
            //pedido al backend de los usuarios para pintarlos
            const response= await axios.get(import.meta.env.VITE_SERVER_URL+'/products' , data)
            console.log(data)    
            //funcion actualizar estado de los productos
            setProducts(response.data.products);         
            console.log(response)

        }catch (error){
            console.log(error)
        }
    }

   
    return (
        <>
        <h1>Lista Productos </h1>
        <div className='product-container'>
            {
            products.map(product=>{
                return(
                   //llamar al componente ProductCards
                   <ProductCards product={product} key={product._id}/>

                )
            })
            }
            </div>
        </>
        
    )
}
