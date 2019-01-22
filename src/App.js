import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './home';
import other from './other';
import notmatch from './notmatch';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/other" component={other} />
          <Route component={notmatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
