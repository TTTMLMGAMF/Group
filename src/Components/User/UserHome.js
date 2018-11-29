import React, { Component } from "react";
import { Modal, Button } from "antd";
import StartGame from "./StartGame";
import "../../scss/App.scss";

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        
        <div>
          <h1>MY GAMES</h1>
          
        </div>
        <div>
          <StartGame/>
        </div>
      </div>
    );
  }
}

export default UserHome;
