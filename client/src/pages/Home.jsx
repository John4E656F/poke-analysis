import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import {
    Box, 
    Container,
    Typography,
} from '@mui/material'

const Home = () => {
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center'}}>
                <Box sx={{ marginTop: 5, borderWidth: 5, border: 'blue', }}>
                    <img src="https://media3.giphy.com/media/vsyKKf1t22nmw/giphy.gif?cid=ecf05e47let17y7r1vc1kbvgjjl7qfrzja7yzejvuc72gz2a&rid=giphy.gif&ct=g" alt="pokedrake" />
                </Box>
            </Container>
        </>
    )
}

export default Home;