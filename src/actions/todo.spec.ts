import * as actionCreators from './todo';
import * as actionTypes from './actionTypes';

describe('todo actions', () => {
	describe('addTodo', () => {
		it('should be a function', () => {
			// Assert
			expect(typeof actionCreators.addTodo).toBe('function');
		});

		it('should return an action with type ADD_TODO', () => {
			// Act
			const action = actionCreators.addTodo();

			// Assert
			expect(action.type).toBe(actionTypes.ADD_TODO);
		});
	});

	describe('updateTodo', () => {
		it('should be a function', () => {
			// Assert
			expect(typeof actionCreators.updateTodo).toBe('function');
		});

		it('should return an action with type UPDATE_TODO with payload the given todo', () => {
			// Arrange
			const todo = 'hey';

			// Act
			const action = actionCreators.updateTodo(todo);

			// Assert
			expect(action.type).toBe(actionTypes.UPDATE_TODO);
			expect(action.payload).toBe(todo);
		});
	});
});