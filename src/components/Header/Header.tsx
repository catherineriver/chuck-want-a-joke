import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  MenuItem,
  Link,
  Menu,
  IconButton,
  Toolbar,
  Box
} from '@mui/material'

const pages = [
  {
    title: 'random',
    url: 'random'
  },
  {
    title: 'about Chuck Norris',
    url: 'about'
  }
]

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Container maxWidth="xl" component="header">
      <Toolbar disableGutters>
        <Link
          color="textPrimary"
          component={RouterLink}
          to="/"
          underline="none"
          variant="h6"
          sx={{
            my: 2,
            paddingX: 2,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center'
          }}
        >
          <SportsGymnasticsSharpIcon sx={{ mr: 1 }} />
          CHUCK
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                <Link
                  color="textPrimary"
                  key={page.title}
                  component={RouterLink}
                  to={`/${page.url}`}
                  underline="none"
                  sx={{ textTransform: 'uppercase' }}
                >
                  {page.title}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Link
          color="textPrimary"
          component={RouterLink}
          to="/"
          underline="none"
          variant="h6"
          sx={{
            my: 2,
            paddingX: 2,
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center'
          }}
        >
          <SportsGymnasticsSharpIcon sx={{ mr: 1 }} />
          CHUCK
        </Link>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end'
          }}
        >
          {pages.map((page) => (
            <Link
              key={page.title}
              color="textPrimary"
              component={RouterLink}
              to={`/${page.url}`}
              underline="none"
              variant="h6"
              sx={{ my: 2, paddingX: 2 }}
            >
              {page.title}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  )
}
export default Header
