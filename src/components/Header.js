import React from "react";

const Header = () => {
  return (
    <header>
      <div className="contenido-header" id="fondo1">
        <nav>
          <input type="checkbox" id="nav" className="hidden" />
          <label htmlFor="nav" className="nav-btn">
            <i></i>
            <i></i>
            <i></i>
          </label>
          <div className="logo">
            <a href="https://www.unep.org/es">
              <img
                src="../../public/images/logo.jpeg"
                alt=""
                className="logotipo"
              />
            </a>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li>
                <a href="#" className="activo">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Pago</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
