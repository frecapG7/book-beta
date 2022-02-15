import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

i18n
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    //Connect to react
    .use(initReactI18next)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,

        lng: 'en',
        fallbackLng: 'en',
        whitelist: ['en', 'fr'],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

