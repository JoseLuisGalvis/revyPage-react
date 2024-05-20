import React, { useEffect } from "react";
import { createRoot } from "react-dom";
import "./i18n";

import "./App.css";
import Header from "./components/Header";
import Contenedor from "./components/Contenedor";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: "ease-in-out", // Función de tiempo de la animación
      once: true, // Si la animación se repite una sola vez
    }); // Inicializa AOS aquí
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("app");
    if (!container) {
      console.error("El contenedor no pudo ser encontrado.");
      return;
    }

    const root = createRoot(container);
    root.render(<App />);
  });

  return (
    <div className="App">
      <Header />
      <Contenedor />
      <Footer />
    </div>
  );
}

export default App;
