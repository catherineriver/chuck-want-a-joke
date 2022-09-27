import * as React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchRandomJoke } from './randomJokeSlice'
import Joke from '../../components/Joke/Joke'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Box, Button, CircularProgress } from '@mui/material'

const RandomJoke: React.FC = () => {
  const dispatch = useAppDispatch()
  const { joke, status } = useSelector((state: RootState) => state.random_joke)
  const [error, setError] = useState(null)

  const handleFetch = () => {
    dispatch(fetchRandomJoke())
      .catch((err) => setError(err))
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {status === 'succeeded' ? <Joke value={joke.value}/> : <CircularProgress />}
            {error !== null && 'Sorry, no jokes today'}
            <Box my={3} alignContent='center'>
                <Button
                    variant="contained"
                    onClick={handleFetch}
                >
                    another one
                </Button>
            </Box>
        </Box>
  )
}
export default RandomJoke
