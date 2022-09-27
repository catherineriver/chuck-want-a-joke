import * as React from 'react'
import Typography from '@mui/material/Typography'
import { JokeTypes } from '../../app/types'

const Joke: React.FC<JokeTypes> = ({ value }) => {
  return (
        <Typography
            variant="subtitle1"
        >
            {value}
        </Typography>
  )
}

export default Joke
