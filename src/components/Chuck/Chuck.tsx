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
              width: '530px',
              height: '70%',
              zIndex: '5',
              '@media (min-width: 780px) and (max-width: 1100px)': {
                width: '450px',
                height: '70%'
              },
              '@media (max-width: 780px)': {
                width: '250px'
              },
              '@media (max-width: 480px)': {
                width: '200px',
                height: '280px',
                bottom: '-100px'
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
