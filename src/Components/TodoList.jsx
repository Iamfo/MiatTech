import useFetch from './Components/useFetch';
import useFilteredTodos from './useFilteredTodos';
import { useState } from 'react';

function TodoList() {

    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [searchItem, setSearchItem] = useState('');

    const filteredTodos = useFilteredTodos(data, searchItem);

    const handleOnChange =(event) => {
        setSearchItem(event.target.value)
    };

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <>
            <h2>lista dei Todo</h2>

            <input onChange = {handleOnChange} type="text" placeholder='Cerca' />
            <ul>
                {data && data.map((todo) => (
                        <li key={todo.id}> 
                        {todo.title}
                        {todo.completed? 'Completato' : 'Non completato' }
                        </li>
                ))}
                       
            </ul>
        </>
    );
}
export default TodoList