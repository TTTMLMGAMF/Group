import React, { Component } from "react";
import io from 'socket.io-client';
// import { connect } from 'react-redux'
// import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import { Modal } from "antd";


class DisplayModal extends Component {
  constructor() {
    super()
    this.state = {
      countDown: 50,
      time: 60000,
      room: 'things',
      joined: false,
      disabled: false,
      visible: false,
      qa: []
    }
    this.joinSuccess = this.joinSuccess.bind(this);
    this.joinRoom = this.joinRoom.bind(this);

  }


  async componentDidMount() {
    await this.setState({
      countDown: this.props.countDown,
      room: this.props.room
    })
    this.socket = io('http://localhost:4000');
    this.joinRoom()
    this.socket.on('room joined', data => {
      this.joinSuccess()
    })
    this.socket.on('question open', data => {
      this.setState({
        countDown: 10
      })
      this.timer()
    })
  }


  timer = () => {
    if (this.state.countDown > 0) {
      setTimeout(() => {
        this.setState({
          countDown: this.state.countDown - 1
        })
        this.timer()
      }, 1000)
    }
  }


  joinRoom() {
    if (this.state.room) {
      this.socket.emit('join room', {
        room: this.state.room
      })
    }
  }
  joinSuccess() {
    this.setState({ joined: true })
  }


  render() {
    return (
      <div>
        <button className="gcBtn" disabled={this.props.qa.disabled}>
          {this.props.qa.points}
        </button>
        <Modal
          visible={this.props.qa.visible}
          centered={true}
        >
          <h1>{this.props.qa.question}</h1>
          <div className="dmCountdown">
            {this.state.countDown}
          </div>
        </Modal>
      </div>
    );
  }
}



export default DisplayModal


