
import aboutUs from "../../assets/images/about/Lucrecia.png";
import logo from "../../assets/images/logos/LOGO.png";

export default function AboutUs() {
	
	return (
		<>
			<main className="main-container">
				<section className="about">
					<div className=" resume resume-Lucre">
						<img className="photo" src={aboutUs} alt="" />
						<h2 className="about-title">Acerca de mi</h2>
						<div className="linea"></div>
						<p className="description  description-Lucre">
							Aca estoy, en contacto con la naturaleza que me llama cada vez
							más, me atrapa, me hipnotiza…..en donde me siento yo, conectada a
							mí. Y en donde veo que está todo lo que necesitamos, no hay nada
							más. Esta nueva década me viene trayendo auto respeto, confianza
							en mí y mis creencias ... autenticidad. Me permito ser fiel a lo
							que creo y quiero defender. Esta soy yo ...{" "}
							<strong>Lucrecia</strong> .
						</p>
					</div>
					<div className=" resume resume-web">
						<h1 className="about-title">
							Acerca de <img className="about-logo" src={logo} alt="" />
						</h1>
						<div className="linea"></div>
						<p className="description description-gracias">
							{" "}
							Ofrece productos que{" "}
							<strong> cuidan el medio ambiente y la salud </strong> de nuestro
							cuerpo. Se trata de productos elaborados con materias primas
							naturales, biodegradables o aptas para reciclaje; libres de
							crueldad animal (no testeada en animales), sin envases plásticos,
							ni químicos nocivos. En su mayoría son preparados de manera
							artesanal. De esta forma, también se apoya a pequeños y medianos
							productores.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}
