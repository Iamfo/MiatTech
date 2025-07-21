import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: '1', titolo: 'Fare la spesa', completato: false },
        { id: '2', titolo: 'Andare al mare', completato: false },
        { id: '3', titolo: 'Allenarsi', completato: false },
        { id: '4', titolo: 'Cucinare', completato: false },
    ],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        completaToDo: (state, action) => {
            const id = action.payload;
            const todo = state.todos.find((t) => t.id === id);
            if (todo) {
                todo.completato = !todo.completato;
            }
        },
    },
});

export const { completaToDo } = todoSlice.actions;
export default todoSlice.reducer;