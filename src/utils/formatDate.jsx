export default function formatDate(fecha) {
	if (!fecha) return "SIN FECHA"; //sino viene fecha cargada...
	const date = new Date(fecha);
	const dateFormat = new Intl.DateTimeFormat("es-AR", {
		//api de Internalizacion
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		
		
	});

	return dateFormat.format(date);
}
