import React, { Component } from "react";
import io from 'socket.io-client';
// import { connect } from 'react-redux'
// import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import { Modal } from "antd";
import backTexture from '../../scss/images/background_texture3.png'


class DisplayModal extends Component {
  constructor() {
    super()
    this.state = {
      countDown: 50,
      time: 60000,
      room: 'things',
      joined: false,
      disabled: false,
      visible: false,
      qa: []
    }
    this.joinSuccess = this.joinSuccess.bind(this);
    this.joinRoom = this.joinRoom.bind(this);

  }


  async componentDidMount() {
    await this.setState({
      countDown: this.props.countDown,
      room: this.props.room
    })
    // this.socket = io('http://localhost:4000')
    this.socket = io();
    this.joinRoom()
    this.socket.on('room joined', data => {
      this.joinSuccess()
    })
    this.socket.on('question open', data => {
      this.setState({
        countDown: 10
      })
      this.timer()
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


  render() {
    return (
      <div className="displaypage">
        <button className="gdBtn" disabled={this.props.qa.disabled}>
          {this.props.qa.points}
        </button>
        <Modal className="gdModal"
          visible={this.props.qa.visible}
          centered={true}
          footer={null}
          width='80vw'
          // height='60vh'
          mask={true}
          centered={true}
          closable={false}
          zIndex={6}
          bodyStyle={{
            // height: '60vh',
            width: '80vw',
            color: 'transparent',
            fontFamily: 'Luckiest Guy, cursive',
            fontSize: '3.5vw',
            justifyContent: 'center',
            textAlign: 'center',
            alignContent: 'middle',
            border: '30px ridge whitesmoke',
            boxShadow: 'inset 0px 0px 40.5px 5px #00000099',
            overFlow: 'hidden',
            backgroundImage: `url(${backTexture}`,
            backgroundRepeat: 'no-repeat',
            backgroundClip: 'border-box',
            backgroundSize: 'cover',
            backgroundColor: '#048BA8',
            backgroundBlendMode: 'darken',
            // borderRadius: '25px',
            padding: '5vh',
            overFlow: 'hidden'
          }}
          style={{
            // backgroundColor: '#2E4057', 
            borderRadius: '25px',
            position: 'absolute',
            top: '10vh',
            left: '10vw',
            overFlow: 'hidden'
          }}
          maskStyle={{ backgroundColor: '#2E4057CC', zIndex: '5' }}
        >
          <div>
            {
              !this.props.showAnswer ? (
                <div>
                  <h1 style={{
                    color: '#FF9502',
                    textShadow: '0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0,0,0,0.9)'
                  }} className='gdModalText'>{this.props.qa.question}</h1>
                </div>
              ) : (
                  <div>
                    <h1
                      className='showAnswer'
                      style={{
                        color: '#99C24D',
                        textShadow: '0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0,0,0,0.9)',
                        position: 'relative',
                        top: '150%'
                      }}>Answer: {this.props.qa.answer}</h1>
                  </div>
                )
            }
          </div>
          <div className="dmCountdown">
            {this.state.countDown}
          </div>
        </Modal>
      </div>
    );
  }
}



export default DisplayModal


