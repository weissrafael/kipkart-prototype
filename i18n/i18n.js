import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {english} from "./english";
import {portuguese} from "./portuguese";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: english,
      pt: portuguese,
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });