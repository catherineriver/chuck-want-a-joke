import * as React from 'react'
import Question from '../../features/Question/Question'
import Joke from '../../components/Joke/Joke'
import ShowMoreButton from '../../features/ShowMoreButton/ShowMoreButton'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useEffect } from 'react'
import { fetchCategories } from '../../app/appSlice'
import { useAppDispatch } from '../../app/hooks'
import Chuck from '../../components/Chuck/Chuck'
import Error from '../../components/Error/Error'

const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const { previousCategory, joke, error, categories } = useSelector(
    (state: RootState) => state.data
  )

  useEffect(() => {
    void dispatch(fetchCategories())
  }, [])

  return (
    <Chuck>
        {error
          ? <Error errorText={error}/>
          : (<>
            <Question
              previousCategory={previousCategory}
              categories={categories}
            />
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
          </>)
        }
    </Chuck>
  )
}

export default Main
