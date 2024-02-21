export default function formatDate(fecha) {
	if (!fecha) return "SIN FECHA"; //sino viene fecha cargada...
	const date = new Date(fecha);
	const dateFormat = new Intl.DateTimeFormat("es-AR", {
		//api de Internalizacion
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	return dateFormat.format(date);
}
