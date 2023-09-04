import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DEFAULT_LANGUAGE, LOCAL_KEY_LANGUAGE } from '../assets/constants'

export const useLocaleStore = defineStore('locale', () => {
  const language = ref(DEFAULT_LANGUAGE)

  const selected_language = localStorage.getItem(LOCAL_KEY_LANGUAGE);
  if (selected_language != null) {
    language.value = selected_language;
  }

  function changeLanguage(language_changed: string) {
    console.log("changeLanguage", language_changed);
    language.value = language_changed;
    localStorage.setItem(LOCAL_KEY_LANGUAGE, language_changed);
  }

  return { language, changeLanguage }
})
