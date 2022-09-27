import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { StateProps } from '../../app/types'

const initialValue = localStorage.getItem('category') as string

const initialState: StateProps = {
  categories: [],
  status: 'idle',
  previousCategory: initialValue,
  joke: {
    value: ''
  }
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

export const actionTitleSlice = createSlice({
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
      state.categories.push(action.payload)
    })
    builder.addCase(fetchJokeFromCategory.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchJokeFromCategory.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.previousCategory = action.payload.categories[0]
      state.joke.value = action.payload.value
    })
  }
})

export default actionTitleSlice.reducer
