import React, { Component } from "react";
import Axios from 'axios'
import { Modal, Radio, Icon, InputNumber, Tag } from "antd";
import "../../scss/App.scss";
import { withRouter } from 'react-router-dom';
// import { connect } from "http2";
import { connect } from "react-redux";
import { v4 as randomString } from "uuid";
import Team from "./Team";
import { updateTimer, updateRoomName, updateTeams } from '../../ducks/reducer';
import {shortRandStr} from '../../tests/ryanLogic';

const RadioGroup = Radio.Group;

export class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      numOfTeams: 0,
      value: 0, //trying to get the radio buttons to fill in when selected
      teams: [],
      roomName: "",
      timer: 30000,
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
    // Here we need to generate a random string to use as a roomName
    let random = `${randomString()}`;
    let shortRandom = shortRandStr(random);
    this.setState({
      roomName: shortRandom
    });
  };

  handleOk = e => {
    console.log(e);
    Axios.post('/api/creategame', { room: this.state.roomName, teams: this.state.teams, timer: this.state.timer, gameId: this.props.gameId, gameTitle: this.props.gameTitle })
      .then(() => this.props.history.push(`/gamecontrol/${this.state.roomName}`))
    this.setState({
      visible: false
    });
    // This is where it needs to update redux with the local state
    this.props.updateRoomName(this.state.roomName);
    this.props.updateTeams(this.state.teams);
    this.props.updateTimer(this.state.timer);
    // console.log(this.props)
    // console.log('this is state: ', this.state)
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleNumberOfTeams = e => {
    this.setState({ teams: [], value: e.target.value });
    this.setState({
      teams: Array(e.target.value).fill({ teamName: "", score: 0 })
    });
  };

  handleTeam = (e, index) => {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.teams = stateCopy.teams.slice();
    stateCopy.teams[index] = Object.assign({}, stateCopy.teams[index]);
    stateCopy.teams[index].teamName = e.target.value;
    this.setState(stateCopy);
  };

  handleTimeChange = value => {
    this.setState({
      timer: value * 1000
    });
  };

  render() {
    console.log(this.props);
    let teamsNames = this.state.teams.map((team, i) => {
      return (
        <Team key={i} index={i} team={team} handleTeam={this.handleTeam} />
      );
    });


    return (
      <div>
        <button type="primary" onClick={this.showModal} style={{backgroundColor: "transparent", border: "0px", paddingLeft: '0'}}>
          <Icon type="caret-right"/> 
        </button>
        <div>
          <Modal
            title={this.props.gameTitle}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <h1>
              How Many Teams
              <RadioGroup
                onChange={this.handleNumberOfTeams}
                value={this.state.value}
              >
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
                <Radio value={4}>4</Radio>
              </RadioGroup>
            </h1>
            {teamsNames}
            <h1>
              Game Code: <Tag color="#2db7f5">{this.state.roomName}</Tag>{" "}
            </h1>
            <h1>
              Question Timer (seconds):
              <InputNumber
                min={10}
                max={360}
                defaultValue={30}
                step={5}
                onChange={this.handleTimeChange}
              />
            </h1>
          </Modal>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { gameTitle } = state;
  return { gameTitle };
}

export default withRouter(connect(mapStateToProps, { updateRoomName, updateTeams, updateTimer })(StartGame));
