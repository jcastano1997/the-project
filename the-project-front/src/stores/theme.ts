import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DEFAULT_THEME, LOCAL_KEY_THEME } from '../assets/constants'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(DEFAULT_THEME)

  const selected_theme = localStorage.getItem(LOCAL_KEY_THEME);
  if (selected_theme != null) {
    theme.value = selected_theme;
  }

  function changeTheme(theme_changed: string) {
    console.log("changeTheme", theme_changed);
    theme.value = theme_changed;
    localStorage.setItem(LOCAL_KEY_THEME, theme_changed);
  }

  return { theme, changeTheme }
})
