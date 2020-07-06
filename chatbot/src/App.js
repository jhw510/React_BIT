import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home,ChatBot } from './components';

function App() {
    return (
        <Router>
            <Link to="/">홈으로 이동</Link> <br/>
            <Link to="/chat">챗봇 이동</Link>
            <Route exact path='/chat' component={ChatBot}/>
            <Route exact path='/' component={Home}/>
        </Router>
    );
}

export default App;
