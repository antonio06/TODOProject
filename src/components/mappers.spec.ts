import * as model from '../model';
import * as vm from './viewModel';
import * as mappers from './mappers';

describe('mappers', () => {
	describe('mapTodoListFromModelToVM', () => {
		it('should be a function', () => {
			// Assert
			expect(typeof mappers.mapTodoListFromModelToVM).toBe('function');
		});

		it('should return an empty array if todos is undefined', () => {
			// Arrange
			const todos = undefined;

			// Act
			const result = mappers.mapTodoListFromModelToVM(todos);

			// Assert
			expect(result).toEqual([]);
		});

		it('should return an empty array if todos is null', () => {
			// Arrange
			const todos = null;

			// Act
			const result = mappers.mapTodoListFromModelToVM(todos);

			// Assert
			expect(result).toEqual([]);
		});

		it('should return an array of todos mapped to viewModel', () => {
			// Arrange
			const todos: model.Todo[] = [
				{ id: '1', description: 'hey' },
				{ id: '2', description: 'ho' },
				{ id: '3', description: 'lets go' },
			];
			const expectedResult: vm.Todo[] = [
				{ id: '1', text: 'hey' },
				{ id: '2', text: 'ho' },
				{ id: '3', text: 'lets go' },
			];

			// Act
			const result = mappers.mapTodoListFromModelToVM(todos);

			// Assert
			expect(result).toEqual(expectedResult);
		});

		it('should map only valid todos and exclude undefined ones', () => {
			// Arrange
			const todos: model.Todo[] = [
				{ id: '1', description: 'hey' },
				undefined,
				{ id: '3', description: 'lets go' },
			];
			const expectedResult: vm.Todo[] = [
				{ id: '1', text: 'hey' },
				{ id: '3', text: 'lets go' },
			];

			// Act
			const result = mappers.mapTodoListFromModelToVM(todos);

			// Assert
			expect(result).toEqual(expectedResult);
		});

		it('should map only valid todos and exclude null ones', () => {
			// Arrange
			const todos: model.Todo[] = [
				null,
				null,
				{ id: '3', description: 'lets go' },
			];
			const expectedResult: vm.Todo[] = [
				{ id: '3', text: 'lets go' },
			];

			// Act
			const result = mappers.mapTodoListFromModelToVM(todos);

			// Assert
			expect(result).toEqual(expectedResult);
		});
	});
});