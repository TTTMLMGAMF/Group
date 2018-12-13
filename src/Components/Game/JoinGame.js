import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class JoinGame extends Component {
    constructor() {
        super();
        this.state = {
            roomCode: ''
        }
        // this.joinRoom = this.joinRoom.bind(this);
    }

    // joinRoom() {
    //     if (this.state.room) {
    //       this.socket.emit('join room', {
    //         room: this.state.room
    //       })
    //     }
    //   }

    // ${this.state.room}

    render() {
        return(
            <div>
                <h1>Join this game's ish</h1>
                <p>Room Code:<input onChange={(e) => {this.setState({room: e.target.value})}} /></p>
                {<Link to={`/buzzer`} 
                target="_blank"><button>Join Game</button></Link>}
            </div>
        )
    }
}