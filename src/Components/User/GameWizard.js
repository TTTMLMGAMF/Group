import React, { Component } from "react";
import { Modal, Button } from "antd";
import "../../scss/App.scss";


export default class GameWizard extends Component {
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
              </Modal>
            </div>
          </div>
        );
      }
    }
