import React from 'react';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './screens/Products';
import About from './screens/About';

function App() {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/screens/Products" element={<Products />} />
      <Route path="/screens/About" element={<About />} />
    </Routes>
  </Router>
  </>;
}

export default App;
