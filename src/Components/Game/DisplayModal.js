import React, { Component } from "react";
import io from 'socket.io-client';
import { connect } from 'react-redux'
import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
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
    // this.socket.on('question open', data => {
    //   this.setState({
    //     qa: data.qa,
    //     visible: true,
    //     countDown: 10
    //   })
    //   this.timer()
    // })
    // this.socket.on('question close', data => {
    //   console.log(data)
    //   this.setState({
    //     disabled: data.disabled,
    //     visible: false,
    //     countDown: 0
    //   })
    // })
  }


  // timer = () => {
  //   if (this.state.countDown > 0) {
  //     setTimeout(() => {
  //       this.setState({
  //         countDown: this.state.countDown - 1
  //       })
  //       this.timer()
  //     }, 1000)
  //   }
  // }


  joinRoom() {
    console.log(this.state.room)
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
    // if (this.state.countDown > 0) {
    //   setTimeout(() => {

    //     this.setState({
    //       countDown: this.state.countDown - 1
    //     })
    //   }, 1000)
    // }
    // console.log("hello")
    console.log('Props', this.props)
    console.log(this.props.countDown)
    console.log(this.state.countDown)
    return (
      <div>
        <button className="gcBtn" disabled={this.state.disabled}>
          {this.props.question.points}
        </button>
        <Modal
          visible={this.props.visible}
          centered={true}
        >
          <h1>{this.state.qa.question}</h1>
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
      </div>
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

