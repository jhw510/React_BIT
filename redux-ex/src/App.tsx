import React from 'react';
import './App.css';
import {Member} from './pages'
import Counter from "./pages/Counter";
import Greeting from "./components/Greeting";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Signin from './components/member/Sign'
import SigninTest from './components/member/SigninTest'
import HideTest from './components/HideTest'
import CounterContainer from "./containers/CounterContainer";
const App = () =>

    <div className="App">
     <CounterContainer/>
    </div>



export default App;
