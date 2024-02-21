import box from '../../assets/images/cards/box.jpg'
import cepillo from '../../assets/images/cards/cepillo_dientes.jpg'
import mate from '../../assets/images/cards/mate_yerba.jpg'
import jabones from '../../assets/images/cards/jabones.jpg'
import shampoo from '../../assets/images/cards/shampoo.jpg'
import detergente from '../../assets/images/cards/detergente.jpg'
import hidrolatos from '../../assets/images/cards/hidrolatos.jpg'
import pasta from '../../assets/images/cards/pasta-dental2.jpg'

import React from 'react'
import formatDate from '@/utils/formatDate'

export default function ProductCards({product}){

return(
    <>
                <article className="card" key={product._id}>
                    <div className="imgBx">
                        <img src={box} alt="" className="box-img" loading="lazy"/>
                    </div>
                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title">{product.producto} </h2>
                            <p className="card-info-text">{product.descripcion}
                            </p>
                        </div>
                        <div className="card-values">
                            <div className="card-date"> {formatDate(product.fecha)} </div>
                            <div className="card-price">{product.precio} </div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>
         

    </>

)


}