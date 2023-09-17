import { createSlice } from "@reduxjs/toolkit"

const DEFAULT_THEME = 'light'

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    selectedTheme: localStorage.getItem('selected-theme') || DEFAULT_THEME,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.selectedTheme = action.payload
      localStorage.setItem('selected-theme', state.selectedTheme)
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = ThemeSlice.actions

export default ThemeSlice.reducer