import { Action as ReduxAction } from 'redux';

export interface Action<P = any> extends ReduxAction {
	type: string;
	payload?: P;
}