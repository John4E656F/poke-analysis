import React, { Component, useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useGetSinglePokemonQuery  } from '../services/pokemonSlice';

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
import Logo from '../assets/images/pokeanalysislogo.png';

  
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  '&:hover': {
    backgroundColor: "#f0f0f04",
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
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [searchText, setSearchText] = useState("");
  const singlePokemonInfo = useGetSinglePokemonQuery(searchText.toLocaleLowerCase());

  useEffect(() => {
    singlePokemonInfo.isSuccess &&
      searchText.length !== 0 &&
      navigate(`/single/${searchText.toLowerCase()}`, {
        state: { data: singlePokemonInfo.data, keyword: searchText },
      });

    singlePokemonInfo.isError &&
    navigate(`/single/${searchText.toLowerCase()}`, {
      state: { data: [], keyword: searchText },
    });
    // console.log(name)
  }, [searchText, singlePokemonInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(name);
    singlePokemonInfo.isSuccess &&
    searchText.length !== 0 &&
    navigate(`/single/${searchText.toLowerCase()}`, {
      state: { data: singlePokemonInfo.data, keyword: searchText },
    });
  }
    
    return (
      <Box >
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#73a9ad' }}>
            <Box sx={{ width: '100%'}}>
              <Link to="/"><img src={Logo} alt="pokéanalysis logo" style={{ height: '50PX'}}/></Link>
            </Box>
            <Container sx={{ display: 'flex',  justifyContent: 'center', gap: 5, }}>
              <Link to="/"><Typography>Home</Typography></Link>
              <Link to="/pokedex"><Typography>Pokedex</Typography></Link>
              <Link to="/analysis"><Typography>Charts</Typography></Link>
            </Container>
            <Container >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon type="submit" value="Search"/>
                </SearchIconWrapper>
                <StyledInputBase
                  type= 'search'
                  name="search"
                  id="search"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={(e) => setName(e.target.value)}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Container>
          </Toolbar>
      </Box>
    );
  }