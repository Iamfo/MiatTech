import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { completaToDo } from "../store/todoSlice";


const Home = () => {

    //const todos = [
    //    { id: '1', titolo: 'Fare la spesa' },
    //    { id: '2', titolo: 'Andare al mare' },
    //    { id: '3', titolo: 'Allenarsi' },
    //    { id: '4', titolo: 'Cucinare' },
    //];

    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchParams({ search: value });
    };

    const filteredTodos = todos.filter((todo) =>
        todo.titolo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>Home</h1>
            <h2>Lista dei To-do</h2>

            <input
                type="text"
                placeholder="Cerca..."
                value={search}
                onChange={handleSearchChange}
            />

            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checked" checked = {todo.completato} onChange = {() => completaToDo(todo.id)} />
                        <Link to={`/todo/${todo.id}`}>{todo.titolo}</Link>
                        {todo.completato? "completato" : "Da fare"}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Home