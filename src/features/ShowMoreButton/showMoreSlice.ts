import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialValue = JSON.parse(localStorage.getItem('category') as string) || 'food';

type Data = string[];
type Joke = {
    value: string,
    categories: string,
};

const initialState = {
    data: [] as Data,
    status: 'idle',
    error: null,
    joke: {
        categories: initialValue,
        value: '',
    } as Joke
}

export const fetchCategories = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/categories')
    return response.json();
});

export const fetchJokeFromCategory = createAsyncThunk('category/fetchData',
    async (category: string) => {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        return response.json();
    });

export const actionTitleSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            // Add user to the state array
            state.data.push(action.payload)
        })
        builder.addCase(fetchJokeFromCategory.fulfilled, (state, action) => {
            // Add user to the state array
            state.joke = action.payload;
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = actionTitleSlice.actions

export default actionTitleSlice.reducer
