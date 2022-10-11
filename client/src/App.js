import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';

import Overview from './pages/Overview';
// import Test from './pages/Test';

import './App.css';



function App() {
  return (
			<BrowserRouter>
				<Routes>
					{/* <Route path="/pokemon/:pokemonId" element={<Pokemon />} /> */}
					<Route path="/" element={<Overview />} />
				</Routes>
			</BrowserRouter>
  );
}

export default App;