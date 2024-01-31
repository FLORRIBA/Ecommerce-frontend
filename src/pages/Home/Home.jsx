import Feature from '../../Layout/Feature/Feature'
import Banner from '../../Layout/Banner/Banner';
import ProductCards from '../../components/ProductCards/ProductCards';
import {ProductCardsContainer} from '../../components/ProductCardsContainer/ProductCardsContainer';

export default function Home() {
    return (
        <>
      

            <Banner />


            <main className="main-container   index">

                <h1 className="main-title"> ARMÁ TU REGALO</h1>
                <div className="line"></div>

           

               
                
            <ProductCardsContainer /> 
               

               


         

            <Feature />
            </main>
      </>
    )
}
