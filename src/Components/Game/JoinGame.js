import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class JoinGame extends Component {
    constructor() {
        super();
        this.state = {
            roomCode: '',
            name: '',
            value: 0
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
    handleColor

    render() {
        return(
            <div>
                <div className='joinContainer'>
                    <div className='inputBox'>
                        <h1>Join the game</h1>
                        <p>What is your name:</p>
                        <input/>
                        <p>What is your room code:</p>
                        <input onChange={(e) => {this.setState({room: e.target.value})}} />
                        {/* <p>What is your favorite color?</p> */}
                        {/* <select onChange={}>
                            <option value={1}>Red</option>
                            <option value={2}>Yellow</option>
                            <option value={3}>Blue</option>
                            <option value={4}>Green</option>
                            <option value={5}>Orange</option>
                        </select> */}
                        {<Link to={`/buzzer/${this.state.roomCode}`} 
                        target="_blank"><button>SUBMIT</button></Link>}
                    </div>
                </div>

            </div>

        )
    }
}