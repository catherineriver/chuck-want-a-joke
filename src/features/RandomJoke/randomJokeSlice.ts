import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RandomJokeState } from '../../app/types'

const initialState: RandomJokeState = {
  status: 'idle',
  joke: {
    value: null
  },
  error: null
}

export const fetchRandomJoke = createAsyncThunk(
  'random_joke/fetch',
  async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    return await response.json()
  }
)

export const actionGetRandomJoke = createSlice({
  name: 'random_joke',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomJoke.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchRandomJoke.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.joke = action.payload
    })
    builder.addCase(fetchRandomJoke.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default actionGetRandomJoke.reducer
