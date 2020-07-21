import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "react-dom";
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from "./helpers/store";
import rootReducer from "./reducers";
import { createStore } from 'redux'

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
