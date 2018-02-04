import * as deepFreeze from 'deep-freeze';
import * as uuid from 'node-uuid';
import { todoReducer } from './todoReducer';
import { Action, ADD_TODO, UPDATE_TODO } from '../../actions';
import { TodoState, createDefaultTodoState } from '../../model';

describe('todoReducer', () => {
	let originalState: TodoState;
	beforeEach(() => {
		originalState = createDefaultTodoState();
	});

	it('should be a function', () => {
		// Assert
		expect(typeof todoReducer).toBe('function');
	});

	it('should return the initial state if action is unknown', () => {
		// Arrange
		const action: Action = {
			type: 'ME_LA_PELA',
		};

		deepFreeze(originalState);
		deepFreeze(action);

		// Act
		const result = todoReducer(originalState, action);

		// Assert
		expect(result).toBe(originalState);
	});

	it('should return nextTodo as empty and push a new todo inside todos having description as the payload when action type is ADD_TODO', () => {
		// Arrange
		const todo = 'lets go';
		originalState.nextTodo = todo;

		originalState.todos = [
			{ id: 'aesede', description: 'ho' },
		];
		const fakeId = 'owo';
		const action: Action = {
			type: ADD_TODO,
		};

		const v4 = jest.spyOn(uuid, 'v4').mockImplementation(() => {
			return fakeId;
		});
		const expectedResult: TodoState = {
			nextTodo: '',
			todos: [
				...originalState.todos,
				{ id: fakeId, description: todo },
			]
		};


		deepFreeze(originalState);
		deepFreeze(action);

		// Act
		const result = todoReducer(originalState, action);

		// Assert
		expect(v4).toBeCalled();
		expect(result).toEqual(expectedResult);
	});

	it('should update nextTodo with the payload when action type is UPDATE_TODO', () => {
		// Arrange
		originalState.nextTodo = 'ho';
		originalState.todos = [
			{ id: 'aesede', description: 'ho' },
		];
		const todo = 'hey';
		const action: Action<string> = {
			type: UPDATE_TODO,
			payload: todo,
		}
		deepFreeze(originalState);
		deepFreeze(action);
		const expectedResult: TodoState = {
			...originalState,
			nextTodo: todo,
		};

		// Act
		const result = todoReducer(originalState, action);

		// Assert
		expect(result).toEqual(expectedResult);
	});
});