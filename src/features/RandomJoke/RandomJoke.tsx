import * as React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchRandomJoke } from './randomJokeSlice'
import Joke from '../../components/Joke/Joke'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Box, Button } from '@mui/material'
import Error from '../../components/Error/Error'

const RandomJoke: React.FC = () => {
  const dispatch = useAppDispatch()
  const { joke, error } = useSelector((state: RootState) => state.random_joke)

  const handleFetch = () => {
    void dispatch(fetchRandomJoke())
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >

      {error
        ? <Error errorText={error}/>
        : (
              <>
                <Joke value={joke.value} />
                <Box my={3} alignContent="center">
                  <Button variant="contained" onClick={handleFetch}>
                    another one
                  </Button>
                </Box>
              </>
          )
      }
    </Box>
  )
}
export default RandomJoke
