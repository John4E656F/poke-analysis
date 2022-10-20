import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Analysis from './pages/Analysis';
// import Test from './pages/Test';

import Navbar from "./components/Navbar";
import './App.css';



function App() {
  return (
			<BrowserRouter>
				<Navbar />
				<Routes>
					{/* <Route path="/pokemon/:pokemonId" element={<Pokemon />} /> */}
					<Route path="/" element={<Home />} />
					<Route path="/pokedex" element={<Pokedex />} />
					<Route path="/analysis" element={<Analysis />} />
				</Routes>
			</BrowserRouter>
  );
}

export default App;