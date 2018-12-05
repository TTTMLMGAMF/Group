import React, { Component } from "react";
import { Input } from "antd";
import "../../scss/App.scss";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teamName: "",
        score: 0
    };
  }

  componentDidMount(){
      this.setState({
          teamName: this.props.team.teamName
      })
  }
  

  render() {
    let {index} = this.props;
    console.log('index: ', index);
    console.log(this.state);
    return (
      <div>
        <Input placeholder="Team Name" onChange={e => this.props.handleTeam(e, index)} />
      </div>
    );
  }
}


