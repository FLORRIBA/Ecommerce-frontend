import logo from '../../assets/images/logos/LOGO.png'


export default function Footer() {
    return (
        <>
          
            <footer className="main-footer">

                <section className="footer-section">
                    <div className="footer-logo">
                        <img className="footer-logo" src={logo} alt="" />
                    </div>
                </section>

                <section className="footer-section">
                    <div className="footer-phone">
                        <h1> Contáctanos</h1>
                        <p className="phone-description">0341-3098402 <br />
                            Lunea a Viernes <br />
                            de 9:00 a 17:00 hs</p>
                    </div>
                </section>

                <section className="footer-section">
                    <div className="social-media">
                        <ul className="footer-list">
                            <li><a className="link-footer" href=""><i className="fa-brands fa-square-facebook"></i> Facebook</a></li>
                            <li><a className="link-footer" href=""><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a className="link-footer" href=""><i className="fa-brands fa-whatsapp"></i> Whatsapp</a></li>

                        </ul>

                    </div>
                </section>

            
            </footer>
            <div className="line-feature"></div>
        </>
    )
}
