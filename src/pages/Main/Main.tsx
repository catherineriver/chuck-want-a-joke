import * as React from 'react'
import Question from '../../features/Question/Question'
import Joke from '../../components/Joke/Joke'
import Error from '../../components/Error/Error'
import ShowMoreButton from '../../features/ShowMoreButton/ShowMoreButton'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useEffect, useState } from 'react'
import { fetchCategories } from '../../app/appSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from '../../app/hooks'
import Chuck from '../../components/Chuck/Chuck'

const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const { previousCategory, joke, error } = useSelector(
    (state: RootState) => state.data
  )
  const [categories, setCategories] = useState([])

  useEffect(() => {
    void dispatch(fetchCategories())
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        setCategories(originalPromiseResult)
      })
  }, [])

  return (
    <Chuck>
        {/* @TODO: think about conditions for error, it should replace button and title */}
        {error && <Error errorText={error} />}
        {categories.length > 0 && (
            <>
              <Question
                previousCategory={previousCategory}
                categories={categories}
              />
              {error !== null && 'Sorry, no jokes. Try to reload page'}
              {joke.value && (
                <Box sx={{ width: { md: '50%', xs: '100%' }, mt: 3, mb: { xs: 2, md: 9 } }}>
                  <Joke value={joke.value} />
                </Box>
              )}
              <Box mt={3} mb={{ xs: 10, md: 7 }} sx={{ width: { xs: '50%', md: '100%' } }}>
                <ShowMoreButton
                  previousCategory={previousCategory}
                  initialCategory={categories[0]}
                />
              </Box>
          </>
        )}
    </Chuck>
  )
}

export default Main
