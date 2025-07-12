import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import LayoutComune from './Layouts/LayoutComune';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComune />} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
