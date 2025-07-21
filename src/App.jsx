import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Layouts/Layout';
import TodoDetails from './Pages/TodoDetails';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todo/ :id" element={<TodoDetails />} />
        </Route>
  ))

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
