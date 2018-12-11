import React, { Component } from "react";
import io from 'socket.io-client'
import DisplayModal from './DisplayModal'
import TeamDisplay from './TeamDisplay'
import '../../scss/App.scss';


class GameDisplay extends Component {
  constructor() {
    super()
    this.state = {
      countDown: 0,
      room: 'things',
      qa: [],
      team: [],
      gameTitle: ''
    }
    this.joinRoom = this.joinRoom.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      room: window.location.pathname.split('/')[2],
    })
    this.socket = io('http://localhost:4000')
    await this.joinRoom()
    await this.socket.on('game state', data => {
      console.log("hit it")
      this.setState({
        qa: data.qa,
        team: data.teams,
        gameTitle: data.gameTitle
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

  countDown = () => {
    this.setState({
      countDown: 10
    })
    this.timer()
  }

  joinRoom() {
    if (this.state.room) {
      this.socket.emit('join room', {
        room: this.state.room
      })
    }
  }

  render() {
    let cOne = this.state.qa.filter(el => el.category_num === 1)
    let cTwo = this.state.qa.filter(el => el.category_num === 2)
    let cThree = this.state.qa.filter(el => el.category_num === 3)
    console.log(cOne[0])
    return (
      <div className="gdContainer">
        <h1>Game Title</h1>


        <div className='gcColumnContainer'>

          <div className="gdCategory">
            {/* <DisplayModal question={qa} countDown={this.state.countDown} /> */}
            {/* <h2>{cOne[0].category}</h2> */}
            {cOne.map((qa, i) => (
              <DisplayModal key={i} qa={qa} countDown={this.state.countDown} />

            ))}
          </div>
          <div className="gdCategory">

            {/* <h2>{cTwo[0].category}</h2> */}
            {cTwo.map((qa, i) => (
              <DisplayModal key={i} qa={qa} countDown={this.state.countDown} />

            ))}
          </div>
          <div className="gdCategory">

            {/* <h2>{cThree[0].category}</h2> */}
            {cThree.map((qa, i) => (
              <DisplayModal key={i} qa={qa} countDown={this.state.countDown} />

            ))}
          </div>
        </div>
        <div className='gdTeamContainer'>
          {this.state.team.map((team, i) => (
            <TeamDisplay key={i} team={team} />

          ))}
        </div>


      </div>
    );
  }
}

export default GameDisplay


