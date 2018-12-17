import React, { Component } from 'react';
import './scss/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import UserHome from './Components/User/UserHome';
import GameControl from './Components/Game/GameControl';
import GameDisplay from './Components/Game/GameDisplay';
import DisplayModal from './Components/Game/DisplayModal';
import JoinGame from './Components/Game/JoinGame';
import Buzzer from './Components/Game/Buzzer';
// import About from './Components/Home/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/userhome' component={UserHome} />
          <Route path='/gamecontrol' component={GameControl} />
          <Route path='/gamedisplay' component={GameDisplay} />
          <Route path='/displayModal' component={DisplayModal} />
          <Route path='/joingame' component={JoinGame} />
          <Route path='/buzzer' component={Buzzer}/>
          {/* <Route path='/about' component={About}/> */}

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
