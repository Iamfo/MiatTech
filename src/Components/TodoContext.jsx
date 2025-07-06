import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        if (!response.ok) throw new Error('Errore nel fetch');

        const data = await response.json();

        setTodos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}