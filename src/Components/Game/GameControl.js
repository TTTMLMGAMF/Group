import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ControlModal from './ControlModal';
import TeamDisplay from './TeamDisplay';
import SideDrawer from '../SideDrawer';
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateRoomName } from '../../ducks/reducer'
import { addOrSub } from '../TestFolder/trentLogic'
import '../../scss/App.scss'


class GameControl extends Component {
    constructor() {
        super()
        this.state = {
            gameName: "The Questions!",
            qa: [],
            team: [],
            room: '',
            cOne: [],
            cTwo: [],
            cThree: []
        }
        this.joinRoom = this.joinRoom.bind(this);

    }


    async componentDidMount() {
        await this.setState({
            room: window.location.pathname.split('/')[2],
        })
        this.socket = io('http://localhost:4000');
        await this.joinRoom()
        await this.socket.on('game state', data => {
            this.setState({
                qa: data.qa,
                team: data.teams,
                gameTitle: data.gameTitle,
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

    handleScore = (i, id, add) => {
        this.socket.emit('handle score', {
            state: this.state,
            i: i,
            id: id,
            add: addOrSub(add)
        })
    }

    showModal = (id) => {
        this.socket.emit('question click', {
            state: this.state,
            id: id
        })
    }

    handleAdd = (i, id) => {
        this.handleScore(i, id, "add")
        this.handleCancel(id)
    }

    handleMinus = (i, id) => {
        this.handleScore(i, id, "sub")
    }

    handleCancel = (id) => {
        this.socket.emit('question close', {
            state: this.state,
            id: id
        })
    }



    render() {
        let cOne = this.state.qa.filter(el => el.category_num === 1)
        let cTwo = this.state.qa.filter(el => el.category_num === 2)
        let cThree = this.state.qa.filter(el => el.category_num === 3)
        console.log(this.state.cOne)
        return (
            <div>

                <div className='sd'>
                    <SideDrawer />
                </div>
                <div className='gcControlContainer'>

                    {/* <div className='gcGame'> */}
                    <h1>{this.state.gameTitle}</h1>
                    {<Link to={`/gamedisplay/${this.state.room}`} target="_blank">OPEN</Link>}
                    <div className='gcColumnContainer'>

                        <div className="gcColumn">

                            {/* <h2>{cOne[0].category}</h2> */}
                            {cOne.map((qa, i) => (
                                <ControlModal key={i} category={cOne[0].cn} team={this.state.team} showModal={this.showModal} qa={qa} handleAdd={this.handleAdd} handleMinus={this.handleMinus} handleCancel={this.handleCancel} i={i} handleDisabled={this.handleDisabled} />

                            ))}
                        </div>
                        <div className="gcColumn">

                            {/* <h2>{cTwo[0].category}</h2> */}
                            {cTwo.map((qa, i) => (
                                <ControlModal key={i} category={cTwo[0].cn} team={this.state.team} showModal={this.showModal} qa={qa} handleAdd={this.handleAdd} handleMinus={this.handleMinus} handleCancel={this.handleCancel} i={i} handleDisabled={this.handleDisabled} />

                            ))}
                        </div>
                        <div className="gcColumn">

                            {/* <h2>{cThree[0].category}</h2> */}
                            {cThree.map((qa, i) => (
                                <ControlModal key={i} category={cThree[0].cn} team={this.state.team} showModal={this.showModal} qa={qa} handleAdd={this.handleAdd} handleMinus={this.handleMinus} handleCancel={this.handleCancel} i={i} handleDisabled={this.handleDisabled} />

                            ))}
                        </div>
                    </div>
                    <div className='gcTeamsContainer'>
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
        room: state.roomName
    }
}

export default connect(mapStateToProps, { updateRoomName })(GameControl)