import React, { Component } from "react";
import io from 'socket.io-client';
import { connect } from 'react-redux'
import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import { Modal } from "antd";


export class DisplayModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countDown: 10,
      time: 60000,
      room: 'things',
      joined: false
    }
    this.joinSuccess = this.joinSuccess.bind(this);
    this.joinRoom = this.joinRoom.bind(this);

  }


  componentDidMount() {
    this.socket = io('http://localhost:4000');
    this.joinRoom()
    this.socket.on('room joined', data => {
      this.joinSuccess()
    })
    this.setState({ countDown: this.props.countDown })
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
    if (this.state.countDown > 0) {
      setTimeout(() => {

        this.setState({
          countDown: this.state.countDown - 1
        })
      }, 1000)
    }

    return (
      <Modal
        visible={this.props.visible}
        centered={true}
      >
        <h1>{this.props.qa.question}</h1>
        <div className="dmCountdown">
          {this.state.countDown}
        </div>
        {/* <div className="dmContainer">
          <div className="dmQuestionContainer">
            <h1 className="dmQuestion">
              {this.props.qa.question}
            </h1>
           
          </div>
        </div> */}
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameName: state.gameTitle,
    qa: state.qa,
    team: state.teams,
    room: state.roomName
  }
}

export default connect(mapStateToProps, { updateTeams, updateRoomName, updateGameTitle, updateQa })(DisplayModal)

