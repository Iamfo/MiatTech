import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import LayoutComune from './Layouts/LayoutComune';
import Todo from './Pages/Todo';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComune />} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todo/" element={<Todo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
