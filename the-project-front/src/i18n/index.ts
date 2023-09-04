import { createI18n } from 'vue-i18n'

import { en_locale } from './locales/en_locale'
import { es_locale } from './locales/es_locale'

import { LOCAL_KEY_LANGUAGE } from '../assets/constants'

const messages = {
    en: en_locale,
    es: es_locale
}
const DEFAULT_LOCALE = import.meta.env.VITE_DEFAULT_LOCALE != null ? import.meta.env.VITE_DEFAULT_LOCALE : 'es';
const selected_language = localStorage.getItem(LOCAL_KEY_LANGUAGE);
const FALLBACK_LOCALE = import.meta.env.VITE_FALLBACK_LOCALE != null ? import.meta.env.VITE_FALLBACK_LOCALE : 'es';

const i18n = createI18n({
    locale: selected_language != null ? selected_language : DEFAULT_LOCALE,
    fallbackLocale: FALLBACK_LOCALE,
    legacy: true,
    globalInjection: true,
    messages
});

const translate = (key: string) => {
    if (!key) {
      return '';
    }
    return i18n.t(key);
};

export { i18n, translate }