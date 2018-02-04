import { v4 } from 'node-uuid';
import { Todo } from "../../model/todo";
import { Action, ADD_TODO, UPDATE_TODO } from "../../actions";
import { TodoState, createDefaultTodoState } from "../../model";

export const todoReducer = (state = createDefaultTodoState(), action: Action): TodoState => {
	switch (action.type) {
		case ADD_TODO:
			return handleAddTodo(state);
		case UPDATE_TODO:
			return handleUpdateTodo(state, action.payload);
		default:
			return state;
	}
};

const handleAddTodo = (state: TodoState): TodoState => ({
	nextTodo: '',
	todos: [
		...state.todos,
		{ id: v4(), description: state.nextTodo },
	],
});

const handleUpdateTodo = (state: TodoState, nextTodo: string): TodoState => ({
	...state,
	nextTodo,
});