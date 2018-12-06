import React, { Component } from "react";
import { Modal, Button, Input, Upload, message, Icon } from 'antd';
// Form,
import "../../scss/App.scss";
import Category from './Category'
import cloneDeep from 'lodash/cloneDeep'
import axios from 'axios'

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


export default class GameWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      gameCategories: 1,
      gameTitle: '',
      subject: '',
      imageUrl: '',
      category: '',
      categoryNum: 1,
      q1: '',
      a1: '',
      q2: '',
      a2: '',
      q3: '',
      a3: '',
      q4: '',
      a4: '',
      q5: '',
      a5: '',
    }
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

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  handleQA = (event) => {
    this.setState({})
  }

  handleQaChange = (index, value, property, id) => {
    let qaCopy = cloneDeep(this.state.qa)
    qaCopy[index][property] = value;
    this.setState({ qa: qaCopy })
    console.log(qaCopy);
    console.log(this.state);
  }

  submitCategoryHandler = (event) => {
    // event.preventDefault()
    axios.post('/api/game', this.state)
    this.setState({
      categoryNum: this.state.categoryNum + 1
    })
    this.setState({
      category: '',
      q1: '',
      a1: '',
      q2: '',
      a2: '',
      q3: '',
      a3: '',
      q4: '',
      a4: '',
      q5: '',
      a5: '',
    });
    if (this.state.categoryNum === 3) {
      this.setState({ visible: false })
    }

  }




  render() {


    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          GAME WIZARD
            </Button>
        <div>
          {/* This is Ryan's */}
          <Modal
            title="GAME WIZARD"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <h2>GAME TITLE:</h2><Input
              name='gameTitle'
              type='text'
              value={this.state.gameTitle}
              onChange={this.handleInputChange}
            />
            <h4>SUBJECT:</h4><Input
              name='subject'
              type='text'
              value={this.state.subject}
              onChange={this.handleInputChange}
            />
            <h4>IMAGE URL:</h4><Input
              name='imageUrl'
              type='text'
              value={this.state.imageUrl}
              onChange={this.handleInputChange}
            />
            {/* <h4>IMAGE:</h4><Upload {...props}><Button><Icon type="upload" /> Click to Upload</Button></Upload> */}
            <hr />
            <h5>CATEGORY TITLE</h5><Input
              name='category'
              type='text'
              value={this.state.category}
              onChange={this.handleInputChange}
            />
            <p>QUESTION 1:</p>
            <Input
              placeholder='easiest question here'
              name='q1'
              type='text'
              value={this.state.q1}
              onChange={this.handleInputChange}
            />
            <Input
              placeholder='answer'
              name='a1'
              type='text'
              value={this.state.a1}
              onChange={this.handleInputChange} />
            <p>QUESTION 2:</p><Input
              placeholder='question'
              name='q2'
              type='text'
              value={this.state.q2}
              onChange={this.handleInputChange} />
            <Input
              placeholder='answer'
              name='a2'
              type='text'
              value={this.state.a2}
              onChange={this.handleInputChange} />
            <p>QUESTION 3:</p><Input
              placeholder='question'
              name='q3'
              type='text'
              value={this.state.q3}
              onChange={this.handleInputChange} />
            <Input
              placeholder='answer'
              name='a3'
              type='text'
              value={this.state.a3}
              onChange={this.handleInputChange} />
            <p>QUESTION 4:</p><Input
              placeholder='question'
              name='q4'
              type='text'
              value={this.state.q4}
              onChange={this.handleInputChange} />
            <Input
              placeholder='answer'
              name='a4'
              type='text'
              value={this.state.a4}
              onChange={this.handleInputChange} />
            <p>QUESTION 5:</p><Input placeholder='most difficult question here'
              name='q5'
              type='text'
              value={this.state.q5}
              onChange={this.handleInputChange} />
            <Input
              placeholder='answer'
              name='a5'
              type='text'
              value={this.state.a5}
              onChange={this.handleInputChange} />

            <hr />
            {/* {categories} */}
            <Button type='primary' onClick={this.submitCategoryHandler}>SUBMIT CATEGORY</Button>
          </Modal>
        </div>
      </div>
    );
  }
}