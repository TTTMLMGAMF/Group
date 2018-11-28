import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/userhome' component={UserHome} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
