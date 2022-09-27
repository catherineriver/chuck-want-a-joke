import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { StateProps } from './types'

const initialValue = localStorage.getItem('category') as string

const initialState: StateProps = {
  categories: [],
  status: 'idle',
  previousCategory: initialValue,
  joke: {
    value: null
  },
  error: null
}

export const fetchCategories = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/categories')
  return await response.json()
})

export const fetchJokeFromCategory = createAsyncThunk('category/fetchData',
  async (category: string) => {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    return await response.json()
  })

export const actionGetData = createSlice({
  name: 'data',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.categories = action.payload
    })
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    builder.addCase(fetchJokeFromCategory.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchJokeFromCategory.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.previousCategory = action.payload.categories[0]
      state.joke.value = action.payload.value
    })
    builder.addCase(fetchJokeFromCategory.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default actionGetData.reducer
