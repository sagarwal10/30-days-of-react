import {createStore, applyMiddleware, combineReducers } from 'redux';
import {rootReducer, initialState} from './reducers';
import apiMiddleware from './apiMiddleware';

const loggingMiddleware = (store) => (next) => (action) => {
    console.log(`Redux Log:`, action);
    next(action);
}

let middleware = [apiMiddleware];
if ("development" == process.env.NODE_ENV) {
    middleware.unshift(loggingMiddleware);
}

export const configureStore = () => {
    const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(
	    ...middleware
	)
    );

    return store;
}

export default configureStore;

