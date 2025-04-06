import i18n from "i18next";

import { TopEN } from "@/languages/Top/en";
import { TopJA } from "@/languages/Top/ja";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: TopEN,
	},
	ja: {
		translation: TopJA,
	},
};

i18n.use(initReactI18next).init({
	resources,

	lng: "ja",
	fallbackLng: "en",

	interpolation: {
		escapeValue: false, // react already safes from xss
	},
});

export default i18n;
