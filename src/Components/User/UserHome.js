import React, { Component } from "react";
// import { Modal, Button, Card, Icon, Avatar, Form } from "antd";
import StartGame from "./StartGame";
import "../../scss/App.scss";
import GameList from "./GameList";
import GameWizard from './GameWizard';
import SideDrawer from './../SideDrawer';
import axios from 'axios';
// import { Card, Icon, Avatar } from 'antd';

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      games: []
    };
  }

  componentDidMount() {
    axios.get(`/api/games`)
      .then(res => this.setState({ games: res.data }))
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

  handleDelete = async (game_id, game_name) => {
    console.log(game_id, game_name)
    await axios.delete(`/api/game/${game_id}/${game_name}`)
    axios.get('/api/games')
      .then(res => { this.setState({ games: res.data }) })
  };

  // const { Meta } = Card;

  render() {
    console.log(this.state.games)


    return (
      <div>
        <div className='uhMain'>
          <SideDrawer />
          <div className='sd'>
          </div>
          <div className='uhBody'>
            <h1 id='uhHeader'>MY GAMES</h1>
            <GameList games={this.state.games} handleDelete={this.handleDelete} />

          </div>
        </div>
      </div>
    );
  }
}

export default UserHome;
