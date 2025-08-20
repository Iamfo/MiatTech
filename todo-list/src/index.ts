import { Todo, TodoStatus, Project, PartialTodo, TodoRecord  } from "./types";
import { User } from "./user";

const todos: Todo[] = [];


const addTodo = (title: string, metadata?: string | Object): Todo => {
  const newTodo: Todo = {
    id: Date.now(),
    title: title,
    completed: false,
    metadata: metadata,
    status: TodoStatus.Pending,
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


function getTodoSummary(todo: Todo): [ string, boolean ] {
  return [ todo.title, todo.completed ];
}


function createProject(users: User[], todos: Todo[]): Project {
  return {
    users,
    todos
  };
}

const updateTodoStatus = (todoId: number, status: TodoStatus): void => {
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    todo.status = status;
    console.log(`Todo ${todoId} status updated to ${TodoStatus[ status ]}`);
  } else {
    console.log(`Todo with id ${todoId} not found`);
  }
}

const marco = new User(1, "Marco", "example@marco.it");
const gena = new User(2, "Gena", "gena@example.it");
const sheila = new User(3, "Sheila", "example@sheila.it");

const todo1 = addTodo("Breakfast at 7:30");
const todo2 = addTodo("Site seeing at 9:50");
const todo3 = addTodo("Lunch at the ranch 13:20");

marco.addTodo(todo1);
gena.addTodo(todo2);
sheila.addTodo(todo3);

console.log(marco)
console.log(gena)
console.log(sheila)


function updatePartialTodo(todoId: number, updates: PartialTodo): void {
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    Object.assign(todo, updates); 
    console.log(`Todo ${todoId} updated with partial properties`);
  } else {
    console.log(`Todo with id ${todoId} not found`);
  }
}


export function convertArrayToRecord(todosArray: Todo[]): TodoRecord {
  const record: TodoRecord = {};
  todosArray.forEach(todo => {
    record[ todo.id ] = todo;
  });
  return record;
}
