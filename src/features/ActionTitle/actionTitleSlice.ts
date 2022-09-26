import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialValue = localStorage.getItem('category') as string;

type Data = string[];
type Joke = {
    value: string,
    categories: string,
};

const initialState = {
    data: [] as Data,
    loading: false,
    error: null,
    joke: {
        categories: initialValue || 'food',
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
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        builder.addCase(fetchJokeFromCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchJokeFromCategory.fulfilled, (state, action) => {
            state.joke = action.payload;
        })
    },
})

export default actionTitleSlice.reducer
