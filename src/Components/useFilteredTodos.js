import { useState, useEffect } from "react";

function useFilteredTodos(todos, searchItem) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {

        if(!todos) return;
        const filtered = todos.filter ((todos) => todos.title.toLowerCase().includes(searchItem.toLowerCase()));

        setFilteredTodos(filtered);
    }, [todos, searchItem]);

    return (
        filteredTodos
    );
}
export default useFilteredTodos