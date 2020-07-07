import React, {Component} from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home,Chat } from './components';
import './App.css';

class App extends Component<any,any> {
  public render() {
        return <Router>
              <Link to="/">홈으로 이동</Link> <br/>
              <Link to="/chat">챗봇 이동</Link>
              <Route exact path='/chat' component={Chat}/>
              <Route exact path='/' component={Home}/>
          </Router>
  }


}
export default App;