import React, { Component } from "react";
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { updateTeams, updateRoomName, updateGameTitle, updateQa } from '../../ducks/reducer'
import { DisplayModal } from './DisplayModal'
import '../../scss/App.scss';
import sky from '../../scss/images/game_sky.png';
import grass from '../../scss/images/game_grass.png';
import sun from '../../scss/images/game_sun.png';
import cloudSmall from '../../scss/images/game_cloud3.png';
import cloudMed from '../../scss/images/game_cloud2.png';
import cloudBig from '../../scss/images/game_cloud1.png';
import gameTitle from '../../scss/images/game_title_box.png';
import categoryTitle from '../../scss/images/game_categroy_titles.png';
import yellowTeam from '../../scss/images/game_TeamScore_yellow.png';
import blueTeam from '../../scss/images/game_TeamScore_blue.png';
import redTeam from '../../scss/images/game_TeamScore_red.png';




class GameDisplay extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      countDown: 10,
      room: 'things',
      joined: false,
      qa: {}
    }
    this.joinSuccess = this.joinSuccess.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      room: this.props.room
    })
    this.socket = io('http://localhost:4000')
    this.joinRoom()
    this.socket.on('room joined', data => {
      this.joinSuccess()
    })
    this.socket.on('question open', data => {
      console.log(data)
      this.setState({
        qa: data.qa,
        visible: true,
        countDown: 10
      })
    })
    this.socket.on('question close', data => {
      this.setState({
        visible: false,
        countDown: 10
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
  joinSuccess() {
    this.setState({ joined: true })
  }

  render() {
    console.log(this.state.qa)
    return (
      <div className="gdContainer">
        <img id='sky' src={sky} alt='sky-background'/>
        <div className='gameinfo'>
          <h1 id='gdgt'>Game Title</h1>
        </div>
        <img id='grass' src={grass} alt='grass-background'/>
        <img id='sun' src={sun} alt='sun-background'/>
        <div className='clouds'>
          <img id='cloudBig' src={cloudBig} alt='Big-cloud illustration'/>
          <img id='cloudSmall' src={cloudSmall} alt='small-cloud illustration'/>
          <img id='cloudMed' src={cloudMed} alt='Medium-cloud illustration'/>
        </div>
        <div className="gdCategoryContainer">

          <div className="gdCategory">
            <div id='cat1'>
              <h2>Category #1</h2>
            </div>
            <DisplayModal visible={this.state.visible} qa={this.state.qa} countDown={this.state.countDown} />
            <div className="gdQuestion">100</div>
            <div className="gdQuestion">200</div>
            <div className="gdQuestion">300</div>
            <div className="gdQuestion">400</div>
            <div className="gdQuestion">500</div>
          </div>
          <div className="gdCategory">
            <div id='cat1'>
              <h2>Category #2</h2>
            </div>
            <div className="gdQuestion">100</div>
            <div className="gdQuestion">200</div>
            <div className="gdQuestion">300</div>
            <div className="gdQuestion">400</div>
            <div className="gdQuestion">500</div>
          </div>
          <div className="gdCategory">
            <div id='cat1'>
              <h2>Category #3</h2>
            </div>
            <div className="gdQuestion">100</div>
            <div className="gdQuestion">200</div>
            <div className="gdQuestion">300</div>
            <div className="gdQuestion">400</div>
            <div className="gdQuestion">500</div>
          </div>
        </div>
        <div className='gdTeamContainer'>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 1</div>
            <div className='gdTeamScore'>1500</div>
          </div>
          <div style={{filter: 'hue-rotate(75deg)'}} className='gdTeam'>
            <div className='gdTeamName'>TEAM 2</div>
            <div className='gdTeamScore'>-600</div>
          </div>
          <div style={{filter: 'hue-rotate(135deg)'}} className='gdTeam'>
            <div className='gdTeamName'>TEAM 3</div>
            <div className='gdTeamScore'>500</div>
          </div>
          <div style={{filter: 'hue-rotate(220deg)'}} className='gdTeam'>
            <div className='gdTeamName'>TEAM 4</div>
            <div className='gdTeamScore'>100</div>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, { updateTeams, updateRoomName, updateGameTitle, updateQa })(GameDisplay)

