import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./features/theme/ThemeSlice"

export default configureStore({
  reducer: {
    theme: themeReducer
  },
})