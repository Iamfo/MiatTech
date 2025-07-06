import React from 'react';
import useFetch from './Components/useFetch';
import TodoList from './Components/TodoList';
import { TodoProvider } from './Components/TodoContext';

function App() {

  return (
    <>
      <TodoProvider>
        < TodoList />
      </TodoProvider>
    </>
  )
}

export default App
