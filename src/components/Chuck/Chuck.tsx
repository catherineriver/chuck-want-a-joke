import { Container, Box } from '@mui/material'
import React from 'react'

interface ChuckProps {
  children: React.ReactNode
}

const Chuck: React.FC<ChuckProps> = ({ children }) => {
  return (
    <Container
        maxWidth="xl"
        component="main"
        sx={{
          position: 'relative',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          overflow: 'hidden',
          flexDirection: 'column'
        }}
    >
        <Box
            sx={{
              position: 'absolute',
              right: 0,
              bottom: '-36px',
              width: '340px',
              zIndex: '10',
              height: '100%',
              '@media (max-width: 425px)': {
                width: '200px',
                height: '280px',
                bottom: '-100px'
              },
              '@media (min-width: 768px)': {
                width: '290px'
              },
              '&::before': {
                content: '""',
                display: 'block',
                background: 'url(https://i.ibb.co/zN5RwMK/Chuck.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'bottom right',
                height: '100%',
                '@media (max-width: 320px)': {
                  display: 'none'
                }
              }
            }}/>
        {children}
    </Container>
  )
}

export default Chuck
