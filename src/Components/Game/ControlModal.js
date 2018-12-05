import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import io from 'socket.io-client';
import { connect } from 'react-redux'
import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import '../../scss/App.scss'


class ControlModal extends Component {
    constructor() {
        super();
        this.state = {
            disabled: false,
            visible: false,
            room: 'things',
            joined: false
        }
    }

    async componentDidMount() {
        await this.setState({
            room: this.props.room
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
        this.setState({ visible: false, disabled: true });
        this.socket.emit('question close', {
            room: this.state.room
        })

    }

    handleMinus = (i) => {
        this.props.handleScore(-this.props.qa.points, i)
    }

    handleCancel = () => {
        this.setState({ visible: false })
        this.socket.emit('question close', {
            room: this.state.room
        })
    }

    render() {
        const { visible, disabled } = this.state;
        // console.log(this.props.qa)
        return (
            <div>

                <button className='gcBtn' disabled={disabled} type="primary" onClick={this.showModal}>
                    Question: {this.props.i}
                </button>
                <Modal
                    visible={visible}
                    title={this.props.catagory}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered={true}
                    footer={[
                        <div>
                            <p>Team 1</p>
                            <Button key="team1.1" onClick={() => this.handleMinus(0)}>-</Button>
                            <Button key="team1.2" type="primary" onClick={() => this.handleAdd(0)}> + </Button>
                            <p>Team 2</p>
                            <Button key="team2.1" onClick={() => this.handleMinus(1)}> - </Button>
                            <Button key="team2.2" type="primary" onClick={() => this.handleAdd(1)}> + </Button>
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

export default connect(mapStateToProps, { updateTeams, updateRoomName, updateGameTitle })(ControlModal)

