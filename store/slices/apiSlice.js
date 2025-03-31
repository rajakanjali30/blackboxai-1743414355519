import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk(
  'api/fetchData',
  async (endpoint, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/${endpoint}`)
      if (!response.ok) throw new Error('Network response was not ok')
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  data: null,
  loading: false,
  error: null
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { clearError } = apiSlice.actions
export default apiSlice.reducer