import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './airport/Airport';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from'react-redux'
import { combineReducers } from "redux";
import { airportReducer } from './airport/Airport'
import {authReducer} from './member/Auth'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Auth from "./member/Auth";


const rootReducer = combineReducers({
    airportReducer,authReducer
})

ReactDOM.render(
    <Provider store = {createStore(rootReducer, applyMiddleware(thunk))}>

        <Auth/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();