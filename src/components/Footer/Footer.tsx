import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp';

const pages = [{
        title: 'random',
        url: 'random'
    },
    {
        title: 'about Chuck Norris',
        url: 'about'
    }];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color='transparent'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SportsGymnasticsSharpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                        sx={{ textTransform: 'uppercase'}}
                                    >{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <SportsGymnasticsSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Link
                                color="#000"
                                key={page.title}
                                component={RouterLink}
                                to={`/${page.url}`}
                                sx={{ my: 2, paddingX: 2, color: '#333', display: 'block' }}
                            >
                                {page.title}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
