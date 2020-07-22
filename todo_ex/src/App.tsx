import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import ToDoInput from "./schedule/ToDoInput";
import ToDoList from "./schedule/ToDoList";
import {store} from "./schedule/store";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
  return (
    <Provider store={store}>
      <ToDoInput/><br/>
        <ToDoList/>
    </Provider>
  );
}

export default App;
