import React from "react";

const Contenedor = () => {
  return (
    <div className="contenedor" id="contenedor-fondo">
      <main className="contenido-principal clearfix">
        <h2 className="encabezado">
          Quiénes <br />
          <span>Somos?</span>
          <img
            src="/revy-sales/public/images/icon.png"
            className="planta"
            alt="Icono de planta"
          />
        </h2>
        <div className="contenedor-grid">
          <div className="imagen-principal columnas2-4">
            <img
              src="../images/img1.jpg"
              alt="Mantenimiento de Celulares"
              className="efecto-imagen"
            />
          </div>
          <div
            className="contenido-principal columnas2-4"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p>
              ¡Confía en nosotros para el cuidado de tus dispositivos móviles!
              Somos especialistas en el mantenimiento y reparación de celulares,
              brindando soluciones rápidas y efectivas para cualquier problema
              que puedan presentar.
            </p>
            <blockquote>Mantente Comunicado...!</blockquote>
            <p>
              Desde pantallas rotas hasta baterías agotadas, estamos aquí para
              ayudarte a que tus dispositivos funcionen como nuevos.
            </p>
          </div>
        </div>
        <div className="contenedor-grid">
          <div
            className="contenido-principal columnas2-4"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p>
              En nuestro emprendimiento, nos enorgullece ofrecer un servicio de
              calidad a precios accesibles. Nuestro equipo de técnicos altamente
              capacitados utiliza herramientas y técnicas de vanguardia para
              diagnosticar y solucionar cualquier falla que pueda surgir en tus
              celulares.
            </p>
            <blockquote>Servicios a Precios Competitivos...!</blockquote>
            <p>
              Nos aseguramos de que recibas un servicio confiable y eficiente
              sin comprometer tu bolsillo.
            </p>
          </div>
          <div className="imagen-principal columnas2-4">
            <img
              src="../../public/images/img3.jpg"
              alt="Reparacion de Celulares"
              className="efecto-imagen"
            />
          </div>
        </div>
        <div className="contenedor-grid">
          <div className="imagen-principal columnas2-4">
            <img
              src="../../public/images/img4.jpg"
              alt="Celulares"
              className="efecto-imagen"
            />
          </div>
          <div
            className="contenido-principal columnas2-4"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p>
              Sabemos lo importante que son tus celulares en tu vida diaria, por
              eso nos esforzamos por brindarte un servicio rápido y conveniente.
              Ya sea que necesites una reparación urgente o simplemente desees
              darle un mantenimiento preventivo a tus dispositivos, estamos
              disponibles para atenderte.
            </p>
            <blockquote>Qué Esperas? Contáctanos Ahora Mismo...!</blockquote>
            <p>
              Confía en nosotros para mantener tus celulares en óptimas
              condiciones y disfruta de la tranquilidad de tener un equipo
              confiable a tu lado.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contenedor;
