import * as React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchJokeFromCategory } from '../../app/appSlice'
import { Button } from '@mui/material'
import { useState } from 'react'

interface ButtonProps {
  previousCategory?: string
  initialCategory: string
}

const ShowMoreButton: React.FC<ButtonProps> = ({
  previousCategory,
  initialCategory
}) => {
  const [error, setError] = useState(null)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(fetchJokeFromCategory(previousCategory || initialCategory))
      .then(() => localStorage.updateItem('category', previousCategory))
      .catch((error) => setError(error))
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      {previousCategory
        ? `tell me joke about ${previousCategory}`
        : 'make me laugh'}
    </Button>
  )
}
export default ShowMoreButton
