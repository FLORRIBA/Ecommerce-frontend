
{
									
    products.map(product => (
    
        <tr key={product._id}>
            {/* FILAS de la TABLA*/}
            <td>
                <img
                    className="defaultPicture"
                    src={product.image ? product.image : defaultPicture}
                />
            </td>
            <td> {product.producto} </td>
            <td> {product.descripcion} </td>
            <td> {product.precio}</td>
            <td> {product.fecha} </td>
            
            <td>
                <button
                    className="action-btn btn-danger"
                    onClick={() => deleteProduct(product._id)}
                    title="Borrar producto"
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                {/*llamamos a la f setFormValue que viene del elemento padre AdminUser y le enviamos el product */}
                <button
                    className="action-btn btn-edit"
                    onClick={() => setFormValue(product)}
                    title="Editar producto"
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </td>
        </tr>
    ))}
    