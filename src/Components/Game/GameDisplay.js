import React, { Component } from "react";
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import { DisplayModal } from './DisplayModal'
import '../../scss/App.scss';


class GameDisplay extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      countDown: 10,
      room: 'things',
      joined: false,
      qa: {}
    }
    this.joinSuccess = this.joinSuccess.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      room: this.props.room
    })
    this.socket = io('http://localhost:4000')
    this.joinRoom()
    this.socket.on('room joined', data => {
      this.joinSuccess()
    })
    this.socket.on('question open', data => {
      console.log(data)
      this.setState({
        qa: data.qa,
        visible: true,
        countDown: 10
      })
    })
    this.socket.on('question close', data => {
      this.setState({
        visible: false,
        countDown: 10
      })
    })
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
    console.log(this.state.qa)
    return (
      <div className="gdContainer">
        <h1>Game Title</h1>
        <div className="gdCategoryContainer">
          <div className="gdCategory">
            <h2>Category #1</h2>
            <DisplayModal visible={this.state.visible} qa={this.state.qa} countDown={this.state.countDown} />
            <div className="gdQuestion">Q1</div>
            <div className="gdQuestion">Q2</div>
            <div className="gdQuestion">Q3</div>
            <div className="gdQuestion">Q4</div>
            <div className="gdQuestion">Q5</div>
          </div>
          <div className="gdCategory">
            <h2>Category #2</h2>
            <div className="gdQuestion">Q1</div>
            <div className="gdQuestion">Q2</div>
            <div className="gdQuestion">Q3</div>
            <div className="gdQuestion">Q4</div>
            <div className="gdQuestion">Q5</div>
          </div>
          <div className="gdCategory">
            <h2>Category #3</h2>
            <div className="gdQuestion">Q1</div>
            <div className="gdQuestion">Q2</div>
            <div className="gdQuestion">Q3</div>
            <div className="gdQuestion">Q4</div>
            <div className="gdQuestion">Q5</div>
          </div>
        </div>
        <div className='gdTeamContainer'>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 1</div>
            <div className='gdTeamScore'>1500</div>
          </div>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 2</div>
            <div className='gdTeamScore'>-600</div>
          </div>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 3</div>
            <div className='gdTeamScore'>500</div>
          </div>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 4</div>
            <div className='gdTeamScore'>100</div>
          </div>
        </div>
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

export default connect(mapStateToProps, { updateTeams, updateRoomName, updateGameTitle, updateQa })(GameDisplay)

