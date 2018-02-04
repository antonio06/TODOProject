import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AppComponent } from './app';
import { AppState } from '../model';
import { addTodo, updateTodo } from '../actions';
import { mapTodoListFromModelToVM } from './mappers';

const mapStateToProps = (state: AppState) => ({
	todos: mapTodoListFromModelToVM(state.todoState.todos),
	nextTodo: state.todoState.nextTodo,
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => ({
	onChange: (nextTodo: string) => {
		dispatch(updateTodo(nextTodo));
	},
	addTodo: () => {
		dispatch(addTodo());
	}
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);