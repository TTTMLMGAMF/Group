import React, { Component } from "react";
import { Modal, Button, Card, Icon, Avatar, Form } from "antd";
import StartGame from "./StartGame";
import "../../scss/App.scss";
import GameList from "./GameList";
import GameWizard from './GameWizard';
// import { Card, Icon, Avatar } from 'antd';

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  // const { Meta } = Card;

  render() {
    

    return (
      <div>

        <div>
          <h1>MY GAMES</h1>
          <GameList />

        </div>
        <div>
          <h3>CREATE NEW GAME</h3>
          <GameWizard/>
        </div>
        <div>
          <StartGame />
        </div>
      </div>
    );
  }
}

export default UserHome;
