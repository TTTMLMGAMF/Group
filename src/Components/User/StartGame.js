import React, { Component } from "react";
import { Modal, Radio, Input, InputNumber, Tag } from "antd";
import "../../scss/App.scss";

const RadioGroup = Radio.Group;

export default class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: 2
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

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };


  handleTimeChange(value){
      console.log('changed', value);
  }

  render() {
    return (
      <div>
        <button type="primary" onClick={this.showModal}>
          Set up Game
        </button>
        <div>
          <Modal
            title="Game Setup"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <h1>
              How Many Teams
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
                <Radio value={4}>4</Radio>
              </RadioGroup>
            </h1>
            <Input placeholder="Team 1" />
            <Input placeholder="Team 2" />
            <Input placeholder="Team 3" />
            <Input placeholder="Team 4" />
            <h1>Game Code: <Tag color="#2db7f5">#2db7f5</Tag> </h1>
            <h1>
              Question Timer (seconds):
              <InputNumber min={10} max={360} defaultValue={30} step={5} onChange={this.handleTimeChange} />
            </h1>
          </Modal>
        </div>
      </div>
    );
  }
}
