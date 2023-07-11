'use client'; 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useRouter} from 'next/navigation';
import { useTranslations } from 'next-intl';

interface MenuItem {
  label: string;
  route: string;
}

const pages: MenuItem[] = [
  { label: 'home', route: '/' },
  { label: 'category', route: '/category' },
  { label: 'product', route: '/product' },
];

export default function MyMenu() {
  const t = useTranslations();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const changeLanguage = (language: string) => {
    const windowHref = window.location.href
    const goTo = windowHref.replace(`/${getCurrentLang()}`, `/${language}`)
    window.location.href = goTo
  };

  const getCurrentLang = () => {
    const url = new URL(window.location.href)
    const tokens = url.pathname.split('/')
    return tokens.length > 0 ? tokens[1] : ''
  }

  function handleOpenPage(goToRoute: string) {
    return router.push(goToRoute);
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#007FFF" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ACHAAS
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={(e) => handleOpenPage(page.route)}>
                  <Typography textAlign="center">{t(`common.${page.label}`)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ACHAAS
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={(e) => handleOpenPage(page.route)}
                sx={{
                  my: 2,
                  mx: 4,
                  color: 'white',
                  display: 'block',
                  borderBottom: '3px solid transparent',
                  '&:active': { borderBottomColor: 'white' },
                  '&:hover' : { borderBottomColor: 'white'}
                }}
              >
                {t(`common.${page.label}`)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Button  variant="contained" color="primary" aria-label="change language"
              onClick={() => {
                changeLanguage('en');
              }}>En</Button>
              <Button  variant="contained" color="primary" aria-label="change language"
              onClick={() => {
                changeLanguage('fr');
              }}>Fr</Button>   
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

