import * as React from 'react'
import { Container, Box, Button } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'

const Footer = () => {
  return (
    <Container maxWidth="xl" component="footer">
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          flexGrow: 1,
          display: { md: 'flex' }
        }}
      >
        <Button
          component="a"
          href="https://www.instagram.com/chucknorris/"
          target="_blank"
        >
          <InstagramIcon />
        </Button>
        <Button
          component="a"
          href="https://twitter.com/chucknorris"
          target="_blank"
        >
          <TwitterIcon />
        </Button>
        <Button
          component="a"
          href="https://www.pinterest.com/stinnetburge/chuck-norris-jokes/"
          target="_blank"
        >
          <PinterestIcon />
        </Button>
      </Box>
    </Container>
  )
}
export default Footer
