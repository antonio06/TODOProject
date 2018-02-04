import * as React from 'react';

interface Props {
	nextTodo: string;
	onChange: (nextTodo: string) => void;
	addTodo: () => void;
}

export const FormComponent: React.StatelessComponent<Props> = (props) => (
	<form className="form" onSubmit={addTodo(props)}>
		<input type="text" name="todo" className="form-control"
			value={props.nextTodo}
			onChange={onChange(props)}
			autoComplete="off"
		/>
		<button type="submit" className="btn btn-default btn-block">Add todo</button>
	</form>
);

const onChange = (props: Props) => (event: React.ChangeEvent<HTMLInputElement>) => {
	props.onChange(event.target.value);
}

const addTodo = (props: Props) => (event: React.FormEvent<HTMLFormElement>) => {
	event.preventDefault();
	props.addTodo();
}