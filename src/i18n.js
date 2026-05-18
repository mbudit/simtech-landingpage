import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import idTranslation from "./locales/id/translation.json";
import enTranslation from "./locales/en/translation.json";
import zhTranslation from "./locales/zh/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    id: {
      translation: idTranslation,
    },
    en: {
      translation: enTranslation,
    },
    zh: {
      translation: zhTranslation,
    },
  },
  lng: localStorage.getItem("simtech-language") || "id",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
