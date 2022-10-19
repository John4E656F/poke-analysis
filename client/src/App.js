import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';

import Pokedex from './pages/Pokedex';
import Analysis from './pages/Analysis';
// import Test from './pages/Test';

import './App.css';



function App() {
  return (
			<BrowserRouter>
				<Routes>
					{/* <Route path="/pokemon/:pokemonId" element={<Pokemon />} /> */}
					<Route path="/" element={<Pokedex />} />
					<Route path="/pokedex" element={<Pokedex />} />
					<Route path="/analysis" element={<Analysis />} />
				</Routes>
			</BrowserRouter>
  );
}

export default App;