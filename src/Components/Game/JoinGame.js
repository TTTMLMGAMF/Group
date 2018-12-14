import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class JoinGame extends Component {
    constructor() {
        super();
        this.state = {
            room: '',
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
        return (
            <div>
                <h1>Join this game's ish</h1>
                <p>What is your name:<input onChange={(e) => { this.setState({ name: e.target.value }) }} /></p>
                <p>What is your room code:<input onChange={(e) => { this.setState({ room: e.target.value }) }} /></p>
                {/* <p>What is your favorite color?</p> */}
                {/* <select onChange={}>
                    <option value={1}>Red</option>
                    <option value={2}>Yellow</option>
                    <option value={3}>Blue</option>
                    <option value={4}>Green</option>
                    <option value={5}>Orange</option>
                </select> */}
                {<Link to={`/buzzer/${this.state.room}/${this.state.name}`}
                    target="_blank"><button>Join Game</button></Link>}
            </div>
        )
    }
}