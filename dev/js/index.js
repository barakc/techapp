import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import AllReducers from './reducers/index';
import Main from './Main';
import { Provider } from 'react-redux';

const store = createStore(AllReducers);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
