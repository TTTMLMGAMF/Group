import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ControlModal from './ControlModal';
import TeamDisplay from './TeamDisplay';
import SideDrawer from '../SideDrawer';
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateTeam, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import '../../scss/App.scss'


class GameControl extends Component {
    constructor() {
        super()
        this.state = {
            gameName: "The Questions!",
            qa: [],
            team: [],
            room: 'things',
            joined: false
        }
        this.joinSuccess = this.joinSuccess.bind(this);
        this.joinRoom = this.joinRoom.bind(this);

    }


    async componentDidMount() {
        await this.setState({
            room: this.props.room,
            qa: this.props.qa,
            team: this.props.team
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
        // this.props.updateTeam(this.state.team)
    }

    handleDisabled = (i) => {
        let newState = Object.assign({}, this.state);
        newState.qa[i].disabled = true
        this.setState(newState);
    }


    render() {
        let cOne = this.state.qa.filter(el => el.categoryNum === 1)
        let cTwo = this.state.qa.filter(el => el.categoryNum === 2)
        let cThree = this.state.qa.filter(el => el.categoryNum === 3)
        // console.log(this.props)
        // console.log(this.state)
        // console.log(cOne)

        return (
            <div>

                <div className='sd'>
                    <SideDrawer />
                </div>
                <div className='gcControlContainer'>

                    {/* <div className='gcGame'> */}
                    <h1>Game Control where the teacher controls the game</h1>
                    {<Link to="/gamedisplay" target="_blank">OPEN</Link>}
                    <div className='gcColumnContainer'>

                        <div className="gcColumn">

                            <h2>{cOne[0].category}</h2>
                            {cOne.map((qa, i) => (
                                <ControlModal key={i} category={cOne[0].cn} qa={qa} handleScore={this.handleScore} i={i} handleDisabled={this.handleDisabled} />

                            ))}
                        </div>
                        <div className="gcColumn">

                            <h2>{cTwo[0].category}</h2>
                            {cTwo.map((qa, i) => (
                                <ControlModal key={i} category={cTwo[0].cn} qa={qa} handleScore={this.handleScore} i={i} handleDisabled={this.handleDisabled} />

                            ))}
                        </div>
                        <div className="gcColumn">

                            <h2>{cThree[0].category}</h2>
                            {cThree.map((qa, i) => (
                                <ControlModal key={i} category={cThree[0].cn} qa={qa} handleScore={this.handleScore} i={i} handleDisabled={this.handleDisabled} />

                            ))}
                        </div>
                    </div>
                    <div className='gcTeamContainer'>
                        {this.state.team.map((team, i) => (
                            <TeamDisplay key={i} team={team} />

                        ))}
                    </div>
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

export default connect(mapStateToProps, { updateTeam, updateRoomName, updateGameTitle, updateQa })(GameControl)