import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from '../redux/configureStore';

const store = configureStore();

const Root = (props) => {
     return (
	<div>
	<Provider store={store}>
	    <App />
	</Provider>
	</div>
     );
    };

export default Root;

