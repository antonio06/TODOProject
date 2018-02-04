import { Action } from "./action";
import { ADD_TODO, UPDATE_TODO } from "./actionTypes";

// ActionCreators
export const addTodo = (): Action => ({
	type: ADD_TODO,
});

export const updateTodo = (todo: string): Action<string> => ({
	type: UPDATE_TODO,
	payload: todo,
});