import * as model from '../model';
import * as vm from './viewModel';

const mapTodoFromModelToVM = (todo: model.Todo): vm.Todo => {
	return Boolean(todo) ?
		{
			id: todo.id,
			text: todo.description,
		}
		: null;
};

export const mapTodoListFromModelToVM = (todos: model.Todo[]): vm.Todo[] => (
	Array.isArray(todos) ?
		todos
			.map((todo) => mapTodoFromModelToVM(todo))
			.filter((todo) => Boolean(todo))
		:
		[]
);