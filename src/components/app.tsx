import * as React from 'react';
import { FormComponent } from './form';
import { ListComponent } from './list';
import { Todo } from './viewModel';

interface Props {
	todos: Todo[];
	nextTodo: string;
	onChange: (nextTodo: string) => void;
	addTodo: () => void;
}

export const AppComponent: React.StatelessComponent<Props> = (props) => (
	<div className="container">
		<h1 className="text-center">TODO App</h1>
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<FormComponent 
					nextTodo={props.nextTodo} 
					onChange={props.onChange}
					addTodo={props.addTodo}
				/>
				<ListComponent todos={props.todos} />
			</div>
		</div>
	</div>
);