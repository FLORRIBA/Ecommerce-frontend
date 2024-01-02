import box from '../../assets/images/cards/box.jpg'
import cepillo from '../../assets/images/cards/cepillo_dientes.jpg'
import mate from '../../assets/images/cards/mate_yerba.jpg'
import jabones from '../../assets/images/cards/jabones.jpg'
import shampoo from '../../assets/images/cards/shampoo.jpg'
import detergente from '../../assets/images/cards/detergente.jpg'
import hidrolatos from '../../assets/images/cards/hidrolatos.jpg'
import pasta from '../../assets/images/cards/pasta-dental2.jpg'

export default function Cards(){

return(
    <>



                <article className="card">

                    <div className="imgBx">

                        <img src={box} alt="" className="box-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title">Box dia especial</h2>
                            <p className="card-info-text">Tratamiento de <strong>fangoterapia</strong> realizado con
                                ingredientes orgánicos; importante prepararlo en cuencos de materiales nobles. Nada
                                mejor que acompañar este momento con un rico té y una Vela de soja que acompaña con su
                                perfume floral.
                            </p>
                        </div>

                        <div className="card-values">
                            <div className="card-date">25/09/2023 </div>
                            <div className="card-price">$8000</div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>

                <article className="card">

                    <div className="imgBx">

                        <img src={cepillo} alt="" className="card-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title">Box niños</h2>
                            <p className="card-info-text"> <strong>Shampoo</strong> sólido y jabon vegetal de avena y
                                almendras. <strong>Pasta</strong> dental natural: tiene todo lo necesario para la
                                correcta limpieza bucal de un niño. <strong>Cepillo </strong>de dientes de bambú:
                                packaging de cartón y mango de bambú moso.
                            </p>
                        </div>

                        <div className="card-values">
                            <div className="card-date">01/08/2023</div>
                            <div className="card-price">$8.000</div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>

                <article className="card">

                    <div className="imgBx">

                        <img src={mate} alt="" className="card-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title"> Box mate </h2>
                            <p className="card-info-text"><strong> Mate</strong> de cerámica,artesanal y unico. Mix de
                                <strong>yuyos </strong>sanadores exquisitos y orgánicos (no contienen agrotóxicos.)
                                Pensados para regalarte un momento de relax y desconexión.. con esta hermosa pieza
                                realizada con materiales nobles.
                            </p>
                        </div>

                        <div className="card-values">
                            <div className="card-date">10/05/2023</div>
                            <div className="card-price">$5.000</div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>

                <article className="card">

                    <div className="imgBx">

                        <img src={jabones} alt="" className="card-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title">Jabones vegetales</h2>
                            <p className="card-info-text">Hechos a base de <strong>aceite vegetal</strong>, desprenden un
                                olor suave del aceite de oliva mezclandose con el de los aceites esenciales y las
                                plantas utilizadas en macerados. Tienen aromas frescos y contienen el poder sanador del
                                Sauce Blanco.</p>

                        </div>

                        <div className="card-values">
                            <div className="card-date">21/03/2023</div>
                            <div className="card-price">$2.000</div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>

                <article className="card">

                    <div className="imgBx">

                        <img src={shampoo} alt="" className="card-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title">Shampoo solido</h2>
                            <p className="card-info-text">La cosmética sólida utiza tensioactivos de origen
                                natural, formulados a partir de aceites esenciales, glicerinas y extractos de plantas.
                                Gracias a la ausencia de ingredientes agresivos, <strong> limpia el cuero
                                    cabelludo</strong> recuperando su equilibrio.</p>
                        </div>

                        <div className="card-values">
                            <div className="card-date">15/04/2024</div>
                            <div className="card-price">$2.000</div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>

                <article className="card">

                    <div className="imgBx">

                        <img src={detergente} alt="" className="card-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title">Detergente</h2>
                            <p className="card-info-text">Está elaborado con materias primas que tienen la capacidad de
                                biodegradarse en la naturaleza en muy poco tiempo. Desengrasa igual o mejor que muchos
                                de los productos convencionales. <strong> Cuida tu piel y el medio ambiente.</strong>
                            </p>
                        </div>
                        <div className="card-values">
                            <div className="card-date">15/04/2024</div>
                            <div className="card-price">$2.000</div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>

                <article className="card">

                    <div className="imgBx">

                        <img src={hidrolatos} alt="" className="card-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title"> Hidrolatos </h2>
                            <p className="card-info-text">Contiene aguas esenciales para brindarle a la piel la más sincera
                                <strong>humectación </strong>. Su aroma a campo silvestre y herbal nos transporta a la
                                más profunda naturaleza. Es un tónico facial, levemente astringente, antibacterial,
                                desinflamatorio, calmante y fortalecedor.
                            </p>
                        </div>

                        <div className="card-values">
                            <div className="card-date">21/05/2023</div>
                            <div className="card-price">$3.000</div>
                        </div>

                        <footer className="card-footer">
                            <a href="#" className="card-button">Ver más</a>
                            <button className="card-btn">Comprar</button>
                        </footer>

                    </div>
                </article>

                <article className="card">

                    <div className="imgBx">

                        <img src={pasta}alt="" className="card-img" loading="lazy"/>
                    </div>

                    <div className="card-container">
                        <div className="card-info">
                            <h2 className="card-info-title"> Pasta dental</h2>
                            <p className="card-info-text">Elaborada con aceite de coco, extracto de caléndula, glicerina
                                vegetal y sodium cocoamphoacetate, un tensioactivo derivado del coco, que favorece la
                                <strong> limpieza de los dientes </strong> y toda la boca de manera suave, cremosa y
                                natural. Sabor menta dulce.
                            </p>
                        </div>

                        <div className="card-values">
                            <div className="card-date">15/06/2023</div>
                            <div className="card-price">$1.500</div>
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