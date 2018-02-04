import { Todo } from "./todo";

export interface AppState {
	todoState: TodoState;
}

export interface TodoState {
	todos: Todo[];
	nextTodo: string;
}

export const createDefaultTodoState = (): TodoState => ({
	todos: [],
	nextTodo: '',
});