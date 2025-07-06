import useFetch from './Components/useFetch';
import useFilteredTodos from './useFilteredTodos';
import { useMemo, useState, useCallback } from 'react';

function TodoList() {

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [searchItem, setSearchItem] = useState('');

    const handleOnChange = useCallback((event) => {
        setSearchItem(event.target.value);
    }, []);

    const filteredTodos = useMemo(() => {
        if (!data) return [];

        return data.filter((todo) =>
            todo.title.toLowerCase().includes(searchItem.toLowerCase())
        );
    }, [data, searchItem]);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <>
            <h2>lista dei Todo</h2>

            <input onChange={handleOnChange} type="text" placeholder='Cerca' />
            <ul>
                {filteredTodos && filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}<br />
                        {todo.completed ? 'Completato' : 'Non completato'}
                    </li>
                ))}

            </ul>
        </>
    );
}
export default TodoList