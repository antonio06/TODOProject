import * as React from 'react';
import { ElementComponent } from './element';
import { Todo } from './viewModel';

interface Props {
	todos: Todo[];
}

export const ListComponent: React.StatelessComponent<Props> = (props) => (
	<dl style={{marginTop: '4rem'}}>
		{
			props.todos.map((todo) => {
				return <ElementComponent key={todo.id} todo={todo}/>
			})
		}
	</dl>
)