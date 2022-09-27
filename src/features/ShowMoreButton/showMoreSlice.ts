import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { StateProps } from '../../app/types'

const initialValue = localStorage.getItem('category') as string

const initialState: StateProps = {
  categories: [],
  status: 'idle',
  previousCategory: initialValue,
  joke: {
    value: '',
    category: initialValue ?? 'food'
  }
}

export const fetchJokeFromCategory = createAsyncThunk('category/fetchData',
  async (category: string) => {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    return await response.json()
  })

export const actionGetJokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchJokeFromCategory.fulfilled, (state, action) => {
      // Add user to the state array
      state.joke = action.payload
    })
  }
})

export default actionGetJokeSlice.reducer
