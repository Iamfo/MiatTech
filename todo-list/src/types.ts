export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    metadata?: any;
    status: TodoStatus;
}


export interface TodoWithMetadata extends Todo {
  metadata: any; 
}


export interface User {
    id: number;
    name: string;
    email?: string;
     todos: readonly Todo[];
}


export interface Project {
  users: User[];
  todos: Todo[];
}


export enum TodoStatus { 
  Pending,
  InProgress,
  Completed
}


export type PartialTodo = {
  [P in keyof Todo]?: Todo[P];
};


export type TodoRecord = Record<number, Todo>;