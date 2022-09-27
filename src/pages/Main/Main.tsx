import * as React from 'react'
import Container from '@mui/material/Container'
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

const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const { previousCategory, joke } = useSelector((state: RootState) => state.data)
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    dispatch(fetchCategories())
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        setCategories(originalPromiseResult)
      }).catch(error => setError(error))
  }, [])

  return (
        <Box sx={{
          position: 'relative',
          height: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          '&::before': {
            content: '""',
            display: 'block',
            background: 'url(https://i.ibb.co/zN5RwMK/Chuck.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'bottom right',
            position: 'absolute',
            right: 0,
            bottom: '-50px',
            width: '40%',
            height: '100%',
            '@media (max-width: 425px)': {
              width: '75%',
              height: '50%'
            },
            '@media (max-width: 768px)': {
              width: '60%'
            }
          }

        }}>
            <Container maxWidth="xl">
                {categories.length > 0 &&
                    <>
                        <ActionTitle previousCategory={previousCategory} categories={categories} />
                        {error !== null && 'Sorry, no jokes. Try to reload page'}
                        {joke &&
                            <Box sx={{ width: { md: '50%', xs: '100%' }, py: 3, my: 2 }}>
                                <Joke value={joke.value}/>
                            </Box>
                        }
                         <Box my={3}>
                            <ShowMoreButton previousCategory={previousCategory} />
                         </Box>
                    </>
                }
            </Container>
        </Box>

  )
}

export default Main
