import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { AppContainer } from './appContainer';
import { AppComponent } from './app';

const configureStore = createMockStore();

describe('AppContainer', () => {
	let store: any;
	beforeEach(() => {
		store = configureStore({
			todoState: {
				nextTodo: '',
				todos: [],
			},
		})
	});

	it('should render an AppComponent', () => {
		// Act
		const component = mount(
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);

		// Assert
		expect(component.type()).toBe(AppComponent);
	});
});