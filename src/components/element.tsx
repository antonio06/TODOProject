import * as React from 'react';
import { Todo } from './viewModel';

interface Props {
	todo: Todo;
}

export const ElementComponent: React.StatelessComponent<Props> = (props) => (
	<dd>
		{props.todo.text}
	</dd>
);