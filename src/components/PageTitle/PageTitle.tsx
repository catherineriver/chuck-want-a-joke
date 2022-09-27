import * as React from 'react'
import Typography from '@mui/material/Typography'

interface PageTitleProps {
  title: string
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
}

const PageTitle: React.FC<PageTitleProps> = ({ title, align }) => {
  return (
        <Typography
            textAlign={align}
            variant="h1"
            my={{
              xl: 7,
              md: 5,
              xs: 3
            }}
            fontWeight='700'
            fontSize={{
              xl: '7rem',
              md: '6rem',
              xs: '2rem'
            }}
        >
            {title}
        </Typography>
  )
}
export default PageTitle
