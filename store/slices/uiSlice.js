import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  isLoading: false,
  mobileMenuOpen: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    }
  }
})

export const { toggleTheme, setLoading, toggleMobileMenu } = uiSlice.actions
export default uiSlice.reducer