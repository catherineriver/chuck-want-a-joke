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
          display: 'flex',
          flexDirection: 'column'
        }}
    >
        <Box
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '530px',
              height: '70%',
              zIndex: '5',
              '@media (min-width: 780px) and (max-width: 1110px)': {
                width: '250px',
                height: '50%'
              },
              '@media (max-width: 780px)': {
                width: '250px'
              },
              '@media (max-width: 480px)': {
                width: '140px',
                height: '280px'
                // bottom: '-100px'
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
