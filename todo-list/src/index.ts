import { Todo } from "./types";

const todos: Todo[] = [];


const addTodo = (title: string, metadata?:string | Object): Todo => {
    const newTodo: Todo = {
        id: Date.now(),
        title: title,
        completed: false,
        metadata: metadata,
    }

    todos.push(newTodo);
    return newTodo
}


const assignTodoToUser = (todoId: number, userId: number): void => {
    const todo = todos.find((t) => t.id === todoId);

    if (todo) {
        todo.userId = userId;
        console.log(`assigned todo ${todoId} to user ${userId}`)
    } else {
        console.log(`todo with id ${todoId} not found`);
    }
}


const getUserTodos = (userId: number): Todo[] => {
    return todos.filter(todo => todo.userId === userId)
}


function throwError(message: string): never {
    throw new Error(message);
}                                                                         


const parseInput = (input: unknown): string => {
    if (typeof input === "string") {
        return input;
    } else if (typeof input === "number") {
        return input.toString();
    } else {
        return throwError("Invalid input type");
    }
}


function updateTodo(todoId: number, updates: Partial<Todo>): void {
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    Object.assign(todo, updates);
    console.log(`Todo ${todoId} updated`);
  } else {
    console.log(`Todo with id ${todoId} not found`);
  }
}


function getTodoSummary(todo: Todo): [string, boolean] {
  return [todo.title, todo.completed];
}


function createProject(users: User[], todos: Todo[]): Project {
  return {
    users,
    todos
  };
}