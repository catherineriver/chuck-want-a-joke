import * as React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchJokeFromCategory } from '../../app/appSlice'
import { Button } from '@mui/material'

interface ButtonProps {
  previousCategory?: string
  initialCategory: string
}

const ShowMoreButton: React.FC<ButtonProps> = ({
  previousCategory,
  initialCategory
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    void dispatch(fetchJokeFromCategory(previousCategory || initialCategory))
      .then(() => localStorage.updateItem('category', previousCategory))
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
