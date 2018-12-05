import React, { Component } from 'react';
import ControlModal from './ControlModal';
import TeamDisplay from './TeamDisplay';
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import '../../scss/App.scss'


class GameControl extends Component {
    constructor() {
        super()
        this.state = {
            gameName: "The Questions!",
            qa: [],
            team: [
                {
                    name: "Team 1",
                    points: 0
                },
                {
                    name: "Team Firelords",
                    points: 0
                },
                {
                    name: "Bob Rossians",
                    points: 0
                }
            ],
            room: 'things',
            joined: false
        }
        this.joinSuccess = this.joinSuccess.bind(this);
        this.joinRoom = this.joinRoom.bind(this);

    }


    async componentDidMount() {
        await this.setState({
            room: this.props.room,
            qa: this.props.qa
        })
        this.socket = io('http://localhost:4000');
        await this.joinRoom()
        await this.socket.on('room joined', data => {
            this.joinSuccess()
        })
    }



    joinRoom() {
        if (this.state.room) {
            this.socket.emit('join room', {
                room: this.props.room
            })
        }
    }
    joinSuccess() {
        this.setState({ joined: true })
    }


    handleScore = (x, i) => {
        let newState = Object.assign({}, this.state);
        newState.team[i].points += x;
        this.setState(newState);
    }


    render() {
        let cOne = this.props.qa.filter(el => el.catagoryNum === 1)
        let cTwo = this.props.qa.filter(el => el.catagoryNum === 2)
        let cThree = this.props.qa.filter(el => el.catagoryNum === 3)
        console.log(this.props)
        console.log(this.state)
        console.log(cOne)

        return (
            <div className='gcControlContainer'>

                {/* <div className='gcGame'> */}
                <h1>Game Control where the teacher controls the game</h1>
                <div className='gcColumnContainer'>

                    <div className="gcColumn">

                        <h2>{cOne[0].catagory}</h2>
                        {cOne.map((qa, i) => (
                            <ControlModal key={i} catagory={cOne[0].cn} qa={qa} handleScore={this.handleScore} i={i + 1} />

                        ))}
                    </div>
                    <div className="gcColumn">

                        <h2>{cTwo[0].catagory}</h2>
                        {cTwo.map((qa, i) => (
                            <ControlModal key={i} catagory={cTwo[0].cn} qa={qa} handleScore={this.handleScore} i={i + 1} />

                        ))}
                    </div>
                    <div className="gcColumn">

                        <h2>{cThree[0].catagory}</h2>
                        {cThree.map((qa, i) => (
                            <ControlModal key={i} catagory={cThree[0].cn} qa={qa} handleScore={this.handleScore} i={i + 1} />

                        ))}
                    </div>
                </div>
                <div className='gcTeamContainer'>
                    {/* <div className='gcTeam1'>
                        <div className='gcName'>
                            {this.state.team[0].name}
                        </div>
                        <div className='gcScore'>
                            {this.state.team[0].points}
                        </div>
                    </div>
                    <div className='gcTeam2'>
                        <div className='gcName'>
                            {this.state.team[1].name}
                        </div>
                        <div className='gcScore'>
                            {this.state.team[1].points}
                        </div>
                    </div> */}
                    {this.state.team.map((team, i) => (
                        <TeamDisplay key={i} team={team} />

                    ))}
                </div>
            </div>
        )

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

export default connect(mapStateToProps, { updateTeams, updateRoomName, updateGameTitle, updateQa })(GameControl)