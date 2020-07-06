import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// @ts-ignore
import { Home,ChatBot } from './components';
class App extends React.Component<any,any> {
  public render() {
        return <Router>
              <Link to="/">홈으로 이동</Link> <br/>
              <Link to="/chat">챗봇 이동</Link>
              <Route exact path='/chat' component={ChatBot}/>
              <Route exact path='/' component={Home}/>
          </Router>
  }


}
export default App;