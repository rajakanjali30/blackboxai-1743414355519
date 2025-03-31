import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './slices/uiSlice'
import apiSlice from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    api: apiSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})