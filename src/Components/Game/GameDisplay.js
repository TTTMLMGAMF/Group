import React, { Component } from "react";
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateTeam, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import DisplayModal from './DisplayModal'
import TeamDisplay from './TeamDisplay'
import '../../scss/App.scss';


class GameDisplay extends Component {
  constructor() {
    super()
    this.state = {
      countDown: 0,
      room: 'things',
      joined: false,
      qa: {},
      team: []
    }
    this.joinSuccess = this.joinSuccess.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      room: this.props.room,
      team: this.props.team
    })
    this.socket = io('http://localhost:4000')
    this.joinRoom()
    this.socket.on('room joined', data => {
      this.joinSuccess()
    })
    this.socket.on('question open', data => {
      this.setState({
        qa: data.qa,
        visible: true,
        countDown: 10
      })
      this.timer()
    })
    this.socket.on('question close', data => {
      this.setState({
        team: data.team
      })
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
    let cOne = this.props.qa.filter(el => el.categoryNum === 1)
    let cTwo = this.props.qa.filter(el => el.categoryNum === 2)
    let cThree = this.props.qa.filter(el => el.categoryNum === 3)
    // console.log(this.props.team)
    return (
      <div className="gdContainer">
        <h1>Game Title</h1>
        {/* <DisplayModal visible={this.state.visible} qa={this.state.qa} countDown={this.state.countDown} /> */}


        <div className='gcColumnContainer'>

          <div className="gdCategory">
            {/* <DisplayModal visible={this.state.visible} qa={this.state.qa} countDown={this.state.countDown} /> */}
            <h2>{cOne[0].category}</h2>
            {cOne.map((qa, i) => (
              // <DisplayModal key={i} visible={this.state.visible} qa={this.state.qa} question={qa} countDown={this.state.countDown} />
              <h1>{qa.points}</h1>

            ))}
          </div>
          <div className="gdCategory">

            <h2>{cTwo[0].category}</h2>
            {cTwo.map((qa, i) => (
              // <DisplayModal key={i} visible={this.state.visible} qa={this.state.qa} question={qa} countDown={this.state.countDown} />
              <h1>{qa.points}</h1>

            ))}
          </div>
          <div className="gdCategory">

            <h2>{cThree[0].category}</h2>
            {cThree.map((qa, i) => (
              <DisplayModal key={i} qa={this.state.qa} question={qa} countDown={this.state.countDown} visible={this.state.visible} />
              // <h1 disabled={this.state.disabled}>{qa.points}</h1>

            ))}
          </div>
        </div>
        <div className='gdTeamContainer'>
          {this.state.team.map((team, i) => (
            <TeamDisplay key={i} team={team} />

          ))}
        </div>


        {/* <div className="gdCategoryContainer">
          <div className="gdCategory">
            <h2>Category #1</h2>
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
        </div> */}
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

