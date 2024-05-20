import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="contenedor clearfix">
        <div className="footer-informacion">
          <h3>
            Qué Esperas? <span> Contáctanos </span>
          </h3>
          <p>Servicio de Calidad, Eficiencia y Economía</p>
        </div>
        <div className="ultimos-tweets">
          <h3>
            Para <span> Guiarte: </span>
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13138.566325268608!2d-58.38310044999999!3d-34.5879346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1694172141520!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="menu">
          <h3>
            Redes<span> Sociales</span>
          </h3>
          <nav className="redes-sociales">
            <a href="https://www.instagram.com/revy.arg/">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </nav>
        </div>
      </div>
      <div className="copyright">
        <p>
          Ciudad Autónoma de Buenos Aires - Argentina Copyright &copy; 2023
          Todos los Derechos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
