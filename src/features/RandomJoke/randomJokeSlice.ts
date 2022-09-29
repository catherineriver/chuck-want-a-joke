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
    builder.addCase(fetchRandomJoke.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(fetchRandomJoke.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.joke = action.payload
    })
    builder.addCase(fetchRandomJoke.rejected, (state) => {
      state.status = 'failed'
      state.error = 'Houston, we have a problem. We don\'t have any new joke. Try to reload the page.'
    })
  }
})

export default actionGetRandomJoke.reducer
