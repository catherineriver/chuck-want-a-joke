import * as React from 'react'
import Question from '../../features/Question/Question'
import Joke from '../../components/Joke/Joke'
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
  const { previousCategory, joke } = useSelector(
    (state: RootState) => state.data
  )
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    dispatch(fetchCategories())
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        setCategories(originalPromiseResult)
      })
      .catch((error) => setError(error))
  }, [])

  return (
    <Chuck>
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
            <Box mt={3} mb={{ xs: 2, md: 7 }} sx={{ width: { xs: '100%', md: '50%' } }}>
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
