import React, { Component } from 'react';
import io from 'socket.io-client';


export default class Buzzer extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            room: '',
        }
    }

    componentDidMount() {
        this.setState({
            room: window.location.pathname.split('/')[2],
            name: window.location.pathname.split('/')[3]
        })
        this.socket = io('http://localhost:4000');
        this.joinRoom()
    }

    joinRoom() {
        if (this.state.room) {
            this.socket.emit('join room', {
                room: this.state.room
            })
        }
    }

    buzzer = () => {
        this.socket.emit('buzzer', {
            room: this.state.room,
            name: this.state.name
        })
    }

    render() {
        console.log(this.state.name)
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.buzzer()}>Smash it!</button>
            </div>
        )
    }
}