// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "Welcome",
        // Agrega aquí tus traducciones en inglés
      },
    },
    es: {
      translation: {
        title: "Bienvenido",
        // Agrega aquí tus traducciones en español
      },
    },
  },
});

export default i18n;
