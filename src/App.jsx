import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import LayoutComune from './Layouts/LayoutComune';
import Todo from './Pages/TodoList';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<LayoutComune />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todo" element={<TodoList />} />
        </Route>
  ))

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
