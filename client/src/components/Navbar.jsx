import React, { Component } from 'react';
import {
  Container,
    styled,
    alpha,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Button,
  } from '@mui/material';

  import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
// import BG from '../../assets/banner.png';

  
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#9B9B9B",
  '&:hover': {
    backgroundColor: "#747474",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
    
    return (
      <Box >

          <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', }}>
            <Box sx={{ width: '100%' }}>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' },  }}
                >
                  Poke Anaylsis
              </Typography>
            </Box>
            <Container sx={{ display: 'flex',  justifyContent: 'center', gap: 5, }}>
              <Typography>Home</Typography>
              <Typography>Pokedex</Typography>
              <Typography>Charts</Typography>
            </Container>
            <Container >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Container>
          </Toolbar>

      </Box>
    );
  }