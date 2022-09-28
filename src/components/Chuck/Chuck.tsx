import { Container } from '@mui/material'
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
         height: 'calc(100vh - 64px)',
         display: 'flex',
         overflow: 'hidden',
         flexDirection: 'column',
         '@media (max-width: 768px)': {
           height: 'calc(100vh - 64px)'
         },
         '&::before': {
           content: '""',
           display: 'block',
           background: 'url(https://i.ibb.co/zN5RwMK/Chuck.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'contain',
           backgroundPosition: 'bottom right',
           position: 'absolute',
           right: 0,
           bottom: '-36px',
           width: '40%',
           height: '100%',
           zIndex: '-1',
           '@media (max-width: 320px)': {
             display: 'none'
           },
           '@media (max-width: 425px)': {
             width: '75%',
             height: '50%'
           },
           '@media (max-width: 768px)': {
             width: '60%',
             bottom: '-100px',
             right: '-30px'
           }
         }
       }}
    >
        {children}
    </Container>
  )
}

export default Chuck
