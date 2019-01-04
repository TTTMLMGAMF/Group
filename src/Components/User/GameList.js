import React, { Component } from "react";
import { Card, Icon, } from "antd";
import { showModal } from '../../tests/trentLogic'
// Avatar, Modal, Button,

import "../../scss/App.scss";
import axios from "axios";
import StartGame from "./StartGame";
const { Meta } = Card; //This is for the antD "card" title and game info



class GameList
  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myGames: [],
    };
  }

  async componentDidMount() {
    let res = axios.get('/api/games');
    this.setState({ myGames: res.data })
    console.log(this.state)
  }

  showModal = () => {
    this.setState({
      visible: showModal(this.state.visible)
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

  // handleDelete = (game_id, game_name) => {
  //   console.log(game_id, game_name)
  //   axios.delete(`/api/game/${game_id}/${game_name}`)
  //   this.props.reRender()
  // };

  render() {
    console.log(this.props)
    let gameCard = this.props.games.map(game => {
      console.log(game.game_name);
      return (
        <div>
          <Card
            style={{ width: 300, margin: 15 }}
            cover={<div style={{ height: 150, overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
              <img alt="game" src={game.image} style={{ height: 200, alignSelf: "center" }} />
            </div>}
            actions={[
              <StartGame gameId={game.game_id} gameName={game.game_name} />,
              // <button style={{ backgroundColor: "transparent", border: "0px", paddingLeft: '0' }}><Icon type="edit" /></button>,
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "0px",
                  paddingLeft: '0',
                  height: '40px',
                  width: '150px'
                }} onClick={() => this.props.handleDelete(game.game_id, game.game_name)}><Icon type="delete" /></button>]}
            hoverable>
            <Meta title={game.game_name}
              description={game.subject} />
          </Card>

        </div>
      )
    })

    return (
      <div className='gameCards'>

        {gameCard}

      </div>
    );
  }
}


export default GameList;
