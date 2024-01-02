

export default function Contac() {
  return (
    <>
    <main className="main-container">

<div className="section-contact">

    <div className="contact-form-container">

        <h1 className="contact-title">Formulario Contacto</h1>
       
        <form className="contact-form" action="">
            <div className="input-wrapper">
                <label htmlFor="fullname">Nombre Completo</label>
                <input type="text" name="fullname" id="fullname" required min="5" max="80"/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required min="5" max="80"/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="message">Mesagge</label>
                <textarea name="message" id="message" rows="4" required minLength="10"
                    maxlength="400"></textarea>
            </div>

            <div className="input-wrapper">
                <button type="submit">Confirmar</button>
            </div>
        </form>
    </div>


    <div className="contact-map contenedor">

        <iframe className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.8513219482807!2d-60.64721532355254!3d-32.9813241736423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abb8dd03d0cf%3A0xd25dcf290acb9d4d!2sAv.%20San%20Mart%C3%ADn%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1693265308036!5m2!1ses-419!2sar"
            width="100%" height="100%"  allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" name="iframe_a">

        </iframe>
    </div>

</div>



</main>
    
    </>
  )
}
