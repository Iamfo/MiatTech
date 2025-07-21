import { useParams } from 'react-router-dom'

const TodoDetails = () => {

  const { id } = useParams();

  const todos = [
    { id: '1', titolo: 'Fare la spesa' },
    { id: '2', titolo: 'Andare al mare' },
    { id: '3', titolo: 'Allenarsi' },
    { id: '4', titolo: 'Cucinare' },
  ];

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return <p>To-do non trovato.</p>;
  }

  return (
    <div>
      <h1>Dettaglio To-do</h1>
      
      <p>ID: {todo.id}</p>
      <p>Titolo: {todo.titolo}</p>
    </div>
  );
};
export default TodoDetails