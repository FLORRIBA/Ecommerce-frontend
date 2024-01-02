
export default function AdminProduct() {

  return (

    <>
   
  
    <main>

    <div className="input-container  input-wrapper">
        <input type="text" className="input" id="search" placeholder="Buscar por nombre"/>
    </div>

    <div className="admin-container">
        <section className="form-container">
            <form id="user-form">
                <input type="hidden" name="id"/>

                <div className="input-wrapper">
                    <label htmlFor="producto">Producto</label>
                    <input type="text" name="producto" id="producto" minLength="5" maxLength="60" requiered
                        autoFocus />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" name="descripcion" id="descripcion" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="precio">Precio</label>
                    <input type="number" name="precio" id="precio" required />
                </div>


                <div className="input-wrapper">
                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" name="fecha" id="fecha" min=" 1930-01-01" />
                </div>


                <div className="input-wrapper">
                    <label htmlFor="image">Imagen</label>
                    <input type="src" name="image" id="image" />

                </div>

                <div className="active">
                    <label htmlFor="active">Activo</label>
                    <input type="checkbox" name="active" id="active" />
                </div>
                <button type="submit" className="btn-form">Agregar producto</button>

            </form>

        </section>
        <section className="table-container">
            <table className="user-table" id="userTable">
                <thead>
                    <tr className="table-head">
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="table-body">

                </tbody>
            </table>
        </section>
    </div>
</main>

    </>
  )
}