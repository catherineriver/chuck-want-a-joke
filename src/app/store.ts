import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import actionGetData from './appSlice'
import actionGetRandomJoke from '../features/RandomJoke/randomJokeSlice'

export const store = configureStore({
  reducer: {
    data: actionGetData,
    random_joke: actionGetRandomJoke
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
