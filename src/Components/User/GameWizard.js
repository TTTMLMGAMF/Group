import React, { Component } from "react";
import { Modal, Button, Form, Input, Upload, message, Icon } from 'antd';
import "../../scss/App.scss";

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


export default class StartGame extends Component {
  constructor(props) {
      super(props);
      this.state = {
        visible: false,
        gameCategories: 1,
        categories: []
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
            GAME WIZARD
            </button>
          <div>
            {/* This is Ryan's */}
            <Modal
              title="GAME WIZARD"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <h2>GAME TITLE:</h2><Input/>
              <h4>SUBJECT:</h4><Input/>
              <h4>IMAGE URL:</h4><Input/>
              {/* <h4>IMAGE:</h4><Upload {...props}><Button><Icon type="upload" /> Click to Upload</Button></Upload> */}
              <hr/>
              <h5>CATEGORY ONE</h5><Input/>
              <p>Q1:</p><Input placeholder='easiest question here'/>
              <p>A1:</p><Input/>
              <p>Q2:</p><Input/>
              <p>A2:</p><Input/>
              <p>Q3:</p><Input/>
              <p>A3:</p><Input/>
              <p>Q4:</p><Input/>
              <p>A4:</p><Input/>
              <p>Q5:</p><Input placeholder='Most difficult question here'/>
              <p>A5:</p><Input/>
              <h5>CATEGORY TWO</h5><Input/>
              <p>Q1:</p><Input placeholder='easiest question here'/>
              <p>A1:</p><Input/>
              <p>Q2:</p><Input/>
              <p>A2:</p><Input/>
              <p>Q3:</p><Input/>
              <p>A3:</p><Input/>
              <p>Q4:</p><Input/>
              <p>A4:</p><Input/>
              <p>Q5:</p><Input placeholder='Most difficult question here'/>
              <p>A5:</p><Input/>
              <h5>CATEGORY THREE</h5><Input/>
              <p>Q1:</p><Input placeholder='easiest question here'/>
              <p>A1:</p><Input/>
              <p>Q2:</p><Input/>
              <p>A2:</p><Input/>
              <p>Q3:</p><Input/>
              <p>A3:</p><Input/>
              <p>Q4:</p><Input/>
              <p>A4:</p><Input/>
              <p>Q5:</p><Input placeholder='Most difficult question here'/>
              <p>A5:</p><Input/>

            </Modal>
          </div>
        </div>
      );
    }
  }