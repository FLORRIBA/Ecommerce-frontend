

export default function Register() {
  return (
    <>
     <main className="main-container">
    <h1 className="contact-title-register">Registro</h1>


    {/* <div className="admin-container"> */}

      <section className="form-container">

        <form id="user-form">
          <input type="hidden" name="id"/>

          <div className="input-wrapper">
            <label htmlFor="fullname">Nombre Completo</label>
            <input type="text" name="fullname" id="fullname" minLength="5" maxLength="60" requiered
              pattern="^[a-zA-Z]+( [a-zA-Z]+)*$" autoFocus />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" minLength="6" maxLength="140" required
              pattern="[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password2">Repetir contraseña</label>
            <input type="password" name="password2" id="password2" required />
          </div>


          <div className="input-wrapper">
            <label htmlFor="location">Localidad</label>
            <select name="location" id="location" required>
              <option value=""></option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Mendoza">Mendoza</option>
              <option value="San Luis">San Luis</option>
              <option value="Cordoba">Cordoba</option>
              <option value="La Pampa">La Pampa</option>
              <option value="Rosario">Rosario</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="age">Edad</label>
            <input type="number" name="age" id="age" required/>
          </div>


          <div className="input-wrapper">
            <label htmlFor="bornDate">Fecha Nacimiento</label>
            <input type="date" name="bornDate" id="bornDate" min=" 1930-01-01" required />
          </div>


          <div className="input-wrapper">
            <label htmlFor="image">Imagen</label>
            <input type="search" name="image" id="image" />
          </div>

          <div className="activo">
            <label htmlFor="active">Activo</label>
            <input type="checkbox" name="active" id="active" />
          </div>
          <button type="submit" className="btn-form">Agregar usuario</button>

        </form>

      </section>
  </main>
    
    
    
    </>
  )
}
