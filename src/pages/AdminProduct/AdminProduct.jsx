import { useForm } from "react-hook-form"; //LIBRERIA DE REACT

export default function AdminProduct() {
	const { register, handleSubmit, watch } = useForm();
	function submitedData(data) {
        console.log(data);
		//-Enviar datos(data) al back con body de la request POST y llamar al endpoint POST /products

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
									{...register("product")}
									id="producto"
									minLength="5"
									maxLength="60"
									requiered
									autoFocus
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="descripcion">Descripcion</label>
								<textarea
									{...register("description")}
									id="descripcion"
									required
								></textarea>
							</div>
							<div className="input-wrapper">
								<label htmlFor="precio">Precio</label>
								<input
									type="number"
									{...register("price")}
									id="precio"
									required
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="fecha">Fecha</label>
								<input
									type="date"
									{...register("date")}
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
									<option value=""></option>
									<option value="box">Box niños</option>
									<option value="box">Box adultos</option>
									<option value="limpieza-dientes">Pasta dientes</option>
									<option value="infusiones">Yerba mate</option>
									<option value="detergentes">Detergente</option>
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
							<tbody id="table-body"></tbody>
						</table>
					</section>
				</div>
			</main>
		</>
	);
}
