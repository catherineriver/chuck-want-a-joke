import * as React from 'react'
import ActionTitle from '../../features/ActionTitle/ActionTitle'
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
            <ActionTitle
              previousCategory={previousCategory}
              categories={categories}
            />
            {error !== null && 'Sorry, no jokes. Try to reload page'}
            {joke.value && (
              <Box sx={{ width: { md: '50%', xs: '100%' }, py: 3, my: 2 }}>
                <Joke value={joke.value} />
              </Box>
            )}
            <Box my={3}>
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
