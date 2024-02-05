import { useForm } from "react-hook-form"; //LIBRERIA DE REACT
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import defaultPicture from "../../assets/images/avatar/usuario.jpg"

const URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = localStorage.getItem("token");

export default function AdminProduct({products}) {
	const { register, handleSubmit} = useForm();
	// State to hold the product data *-Usamos el useStategancho para crear una variable de estado dbproducts y una función setDbUserspara actualizarla.
	const [dbProducts, setDbProducts] = useState([]); //Estado() inicializado como un array vacio.
	const [productId, setProductId] = useState([]); //deshabilitar el Password al editar
	const [categories, setCategories] = useState([]);
	// const [formValue, setFormValue] = useState();
	const navigate = useNavigate();

	//-Enviar datos(data) al back con body de la request POST y llamar al endpoint POST /products
	async function submitedData(data) {
		try {
			//-PUT: EDITAR producto
			if (productId) {
				if (!TOKEN) return; //si NO HAY TOKEN cancelo
				//metodo PUT ()Postman
				const response = await axios.put(
					`${URL}/products/ ${productId}`,
					data,
					{
						headers: { authorization: TOKEN },
					},
				);
				Swal.fire({
					icon: "success",
					title: "producto editado correctamente ",
					text: `El producto ${response.data.product.name} fue editado correctamente`,
				});

				setProductId(null);
				return; //para que mi codigo que sigue luego del if no se ejecute.
			}

			//-POST: CREAR producto
			const response = await axios.post(`${URL}/products`, data); //enviamos al back
			console.log(response)

			Swal.fire({
				icon: "success",
				title: "producto creado ",
				text: `El producto ${response.data.product.name} fue creado correctamente`,
			});

			getProducts();
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se creo producto",
				text: "Algunos datos ingresados no son correctos",
			});
			if (error.response.status === 401) {
				//logout()
				localStorage.removeItem("currentUser");
				localStorage.removeItem("token");
				navigate("/");
			}
		}
	}
	
	//-Obtener Usuarios
	async function getProducts() {
		try {
			const response = await axios.get(`${URL}/products`);
			const products = response.data.products;
			console.log(products)

			setDbProducts(products);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los productos",
			});
		}
	}

	async function deleteProduct(id) {
		Swal.fire({
			title: "Confirma borrar el producto",
			text: `Realmente desea borrar el producto ${id}`,
			icon: "warning",
			showDenyButton: true,
			confirmButtonText: "Borrar",
			confirmButtonColor: "#e06262",
			denyButtonText: `Cancelar`,
			reverseButtons: true, // invertir botones borrar y cancelar
		}).then(async function (resultado) {
			//cuando la persona "confirmo"
			if (resultado.isConfirmed) {
				try {
					if (!TOKEN) return;
					//-Borrar Productos en la BD
					await axios.delete(`${URL}/products/${id}`, {
						headers: { authorization: TOKEN }, //objeto opciones, tiene la propiedad header{}
					});
					Swal.fire({
						icon: "success",
						title: "Producto borrado",
						text: `El producto ${id} fue borrado correctamente`,
					});
					//-Actualizar el estado de Productos
					getProducts();
				} catch (error) {
					console.log(error);
					Swal.fire({
						icon: "error",
						title: "Error al borrar el producto",
						text: `No se pudo borrar el producto ${id}`,
					});
					if (error.response.status === 401) return logout();
				}
			} //cierra if
		}); //cierra then
	}

	function logout() {
		localStorage.removeItem("currentUser");
		localStorage.removeItem("token");
		navigate("/");
	}

	useEffect(function () {
		//controlo la carga de usuario
		getProducts();
		getCategories();
		//prevengo el bucle infinito
	}, []);


	async function getCategories(){
		try{
			const response = await axios.get('http://localhost:3000/categories')
			const categoriesDB=response.data.categories;
			console.log(response)
			
			// setear un estado que maneje las categorias RECIBIDAS DE BD
			setCategories(categoriesDB);

		}catch (error){
			console.log('No se pudieron obtener las categorias')
		}
	}


	function setFormValue(product) {
		setValue("product", product.producto);
		setValue("description", product.descripcion);
		setValue("price", product.precio);
		setValue("date", product.fecha);
		setValue("image", product.image);
		setValue("active", product.active);
		setValue("category", product.category);
	}

	return (
		<>
			<main>
				<div className="input-container  input-wrapper">
					<input
						type="text"
						className="input"
						id="search"
						placeholder="Buscar por nombre"
					/>
				</div>

				<div className="admin-container">
					<section className="form-container">
						{/* Formulario de carga de productos / /*cuando se llama al submit = enviale data a la funcion*/}
						<form id="user-form" onSubmit={handleSubmit(submitedData)}>
							<div className="input-wrapper">
								<label htmlFor="producto">Producto</label>
								<input
									type="text"
									{...register("producto")}
									id="producto"
									minLength="5"
									maxLength="60"
									required
									autoFocus
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="descripcion">Descripcion</label>
								<textarea
									{...register("descripcion")}
									id="descripcion"
									required
								></textarea>
							</div>
							<div className="input-wrapper">
								<label htmlFor="precio">Precio</label>
								<input
									type="number"
									{...register("precio")}
									id="precio"
									required
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="fecha">Fecha</label>
								<input
									type="date"
									{...register("fecha")}
									id="fecha"
									min=" 1930-01-01"
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="image">Imagen</label>
								<input type="url" {...register("image")} id="image" />
							</div>
							<div className="active">
								<label htmlFor="active">Activo</label>
								<input type="checkbox" {...register("active")} id="active" />
							</div>

							<div className="input-wrapper" {...register("category")}>
								<label htmlFor="category">Categoria</label>
								<select name="category" id="category">
									{
										categories.map((category)=>(
										<option key={category._id} value={category._id}>
											{category.name}
										</option>
									))}
								</select>
							</div>

							<button type="submit" className="btn-form">
								Agregar Producto
							</button>
						</form>
					</section>

					{/* Tabla con mis productos para manejar el CRUD de los mismos */}
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

							{		
									products.map((product) => (
									
										<tr key={product._id}>
									
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
											
								
							</tbody>
						</table>
					</section>
				</div>
			</main>
		</>
	);
}
