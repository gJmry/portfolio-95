import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            startup: {
                initializing: 'Initializing system...',
                loadingConfig: 'Loading user configuration...',
                booting: 'Booting up React95 environment...',
                ready: 'System ready. Press any key to start.'
            }
        }
    },
    fr: {
        translation: {
            startup: {
                initializing: 'Initialisation du système...',
                loadingConfig: 'Chargement de la configuration utilisateur...',
                booting: 'Démarrage de l’environnement React95...',
                ready: 'Système prêt. Appuyez sur une touche pour commencer.'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
