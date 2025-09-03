import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import ptTranslation from "./locales/pt/translation.json"

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {enTranslation},
      pt: {ptTranslation}
    },
    fallback: "pt"
  })
