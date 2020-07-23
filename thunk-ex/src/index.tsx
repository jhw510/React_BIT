import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './airport/Airport';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './airport/store';
import {Provider} from'react-redux'

ReactDOM.render(
    <Provider store = {createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();