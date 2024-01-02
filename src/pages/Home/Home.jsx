

import Feature from '../../Layout/Feature/Feature'
import Banner from '../../Layout/Banner/Banner';
import Cards from '../../components/Cards/Cards';


export default function Home() {
    return (
        <>
      

            <Banner />


            <main className="main-container   index">

                <h1 className="main-title"> ARMÁ TU REGALO</h1>
                <div className="line"></div>

           

                <section className="card-section">

                <Cards/>

                </section>


         

            <Feature />
            </main>
      </>
    )
}
