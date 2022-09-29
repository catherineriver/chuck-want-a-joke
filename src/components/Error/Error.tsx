import React from 'react'
import { Typography } from '@mui/material'

interface ErrorProps {
  errorText: string
}

const Error: React.FC<ErrorProps> = ({ errorText }) => {
  return (
      <Typography
          variant="h4"
          lineHeight={1.7}
          fontSize={{
            xl: '2.5rem',
            md: '2rem',
            xs: '1.5rem'
          }}
      >
            {errorText}
      </Typography>
  )
}

export default Error
