import { Todo } from "./types";

export function filterTodo < TodoType extends Todo> (
    todos: TodoType [],
    filterFn: (todo: TodoType) => boolean
): TodoType[] {
    return todos.filter(filterFn);
}