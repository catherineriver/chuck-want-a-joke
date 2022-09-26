import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {Joke, StateProps} from "../../app/types";


const initialState = {
    status: 'idle',
    joke: {
        value: '',
    }
} as StateProps

export const fetchRandomJoke = createAsyncThunk('random_joke/fetch',
    async () => {
        const response = await fetch(`https://api.chucknorris.io/jokes/random`)
        return await response.json() as Joke;
    });

export const actionGetRandomJoke = createSlice({
    name: 'random_joke',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchRandomJoke.pending, (state, action) => {
            state.status = 'pending';
        })
        builder.addCase(fetchRandomJoke.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.joke = action.payload;
        })
        builder.addCase(fetchRandomJoke.rejected, (state, action) => {
            state.status = 'failed';
        })
    },
})

export default actionGetRandomJoke.reducer
