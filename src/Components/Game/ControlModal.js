import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import io from 'socket.io-client';
import { connect } from 'react-redux'
import { updateTeam, updateRoomName, updateGameTitle } from '../../ducks/reducer'
import '../../scss/App.scss'


class ControlModal extends Component {
    constructor() {
        super();
        this.state = {
            team: [],
            disabled: false,
            visible: false,
            room: 'things',
            joined: false,
            index: 0
        }
    }

    async componentDidMount() {
        await this.setState({
            room: this.props.room,
            team: this.props.team
        })
        this.socket = io('http://localhost:4000');
        this.joinRoom()
        this.socket.on('room joined', data => {
            this.joinSuccess()
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


    showModal = () => {
        this.setState({
            visible: true
        });
        this.socket.emit('question click', {
            room: this.state.room,
            qa: this.props.qa,
            i: this.props.i
        })
    }

    handleAdd = (i) => {
        this.props.handleScore(this.props.qa.points, i)
        this.props.handleDisabled(i)
        this.setState({ visible: false });

        this.socket.emit('question close', {
            room: this.state.room,
            team: this.state.team,
            disabled: true
        })

    }

    handleMinus = (i) => {
        this.props.handleScore(-this.props.qa.points, i)
    }

    handleCancel = () => {
        this.setState({ visible: false })
        this.socket.emit('question close', {
            room: this.state.room,
            team: this.state.team
        })
    }

    render() {
        const { visible } = this.state;
        console.log(this.props)
        return (
            <div>

                <button className='gcBtn' disabled={this.props.qa.disabled} type="primary" onClick={this.showModal}>
                    Question: {this.props.i}
                </button>
                <Modal
                    visible={visible}
                    title={this.props.category}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered={true}
                    footer={[
                        <div>
                            {this.state.team.map((team, i) => (
                                <div key={i}>
                                    <p>{team.name}</p>
                                    <Button key={i + 200} onClick={() => this.handleMinus(i)} > - </Button>
                                    <Button key={i + 100} type='primary' onClick={() => this.handleAdd(i)} > + </Button>
                                </div>
                            ))}
                        </div>
                    ]}
                >
                    <h1>Question: {this.props.qa.question}</h1>
                    <h1>Answer: {this.props.qa.answer}</h1>
                    <p>Points: {this.props.qa.points}</p>
                </Modal>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        gameName: state.gameTitle,
        team: state.teams,
        room: state.roomName
    }
}

export default connect(mapStateToProps, { updateTeam, updateRoomName, updateGameTitle })(ControlModal)

