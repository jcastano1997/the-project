import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DEFAULT_THEME } from '../assets/constants'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(DEFAULT_THEME)
  function changeTheme(theme_changed: string) {
    theme.value = theme_changed
  }
  return { theme, changeTheme }
})
