import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import actionTitleSlice from '../features/ActionTitle/actionTitleSlice'
import actionGetJokeSlice from '../features/ShowMoreButton/showMoreSlice'
import actionGetRandomJoke from '../features/RandomJoke/randomJokeSlice'

export const store = configureStore({
  reducer: {
    data: actionTitleSlice,
    joke: actionGetJokeSlice,
    random_joke: actionGetRandomJoke
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
