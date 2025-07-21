import { Link } from "react-router-dom";

const Home = () => {

    const todos = [
        { id: '1', titolo: 'Fare la spesa' },
        { id: '2', titolo: 'Andare al mare' },
        { id: '3', titolo: 'Allenarsi' },
        { id: '4', titolo: 'Cucinare' },
    ];

    return (
        <>
            <h1>Home</h1>
            <h2>Lista dei To-do</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.titolo}</Link>
          </li>
        ))}
      </ul>
        </>
    );
}
export default Home