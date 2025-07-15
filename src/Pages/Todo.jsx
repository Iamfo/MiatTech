import React from 'react'
import {Link, useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Todo = () => {

     const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchItem = searchParams.get('search') || '';
  const [filter, setFilter] = useState(searchItem);

  const [todos, setTodos] = useState([
    { id: "1", titolo: "Fare la spesa" },
    { id: "2", titolo: "Andare al mare" },
    { id: "3", titolo: "Allenarsi" },
    { id: "4", titolo: "Cucinare" },
  ]);

  useEffect(() => {
    if (filter) {
      setSearchParams({ search: filter });
    } else {
      setSearchParams({});
    }
  }, [filter, setSearchParams]);

  const filteredTodos = todos.filter(todo =>
    todo.titolo.toLowerCase().includes(filter.toLowerCase())
  );

  const selectedTodo = todos.find(todo => todo.id === id);

  return (
    <>
      <h2>Lista dei To-do</h2>
      <input
        type="text"
        placeholder="Cerca To-do"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.titolo}</Link>
          </li>
        ))}
      </ul>

      {id && selectedTodo && (
        <div>
          <h3>Dettagli del To-do</h3>
          <p>ID: {selectedTodo.id}</p>
          <p>Titolo: {selectedTodo.titolo}</p>
        </div>
      )}
    </>
  );
};
export default Todo