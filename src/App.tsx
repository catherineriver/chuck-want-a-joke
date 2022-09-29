import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Box } from '@mui/material'

function App () {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      p: 0,
      m: 0,
      '@supports (-webkit-touch-callout: none)': {
        height: '-webkit-fill-available'
      }

    }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default App
