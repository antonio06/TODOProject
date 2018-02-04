import * as React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from './components/appContainer';
import { store } from './store';

export const AppProvider: React.StatelessComponent = () => (
	<Provider store={store}>
		<AppContainer	/>
	</Provider>
);