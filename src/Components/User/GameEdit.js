import React, {Component} from 'react';
import "../../scss/App.scss";
import axios from 'axios';
import { connect } from 'react-redux';
import { navCreateGame } from '../../ducks/reducer';
import { Button, Input} from "antd";

  
  class GameEdit extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
        gameCategories: 1,
        game_id: 0,
        gameTitle: "",
        subject: "",
        imageUrl: "",
        category: "",
        categoryNum: 1,
        q1: "",
        a1: "",
        q2: "",
        a2: "",
        q3: "",
        a3: "",
        q4: "",
        a4: "",
        q5: "",
        a5: ""
      };
    }
  
    handleEditMount = () => {
        axios.get()
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
      };
    
    render() {
        const {gameTitle, subject, category, imageUrl} = this.state;
      return (
        <div>
            <h1>{gameTitle}</h1>
            <input
              name="gameTitle"
              type="text"
              value={this.state.gameTitle}
              onChange={this.handleInputChange}
            >{gameTitle}</input>
            <h4>SUBJECT:</h4>
            <input
              name="subject"
              type="text"
              value={this.state.subject}
              onChange={this.handleInputChange}
            >{subject}</input>
            <h4>IMAGE URL:</h4>
            <input
              name="imageUrl"
              type="text"
              value={this.state.imageUrl}
              onChange={this.handleInputChange}
            >{imageUrl}</input>
            {/* <h4>IMAGE:</h4><Upload {...props}><Button><Icon type="upload" /> Click to Upload</Button></Upload> */}
            <hr />
            <h5>{category}</h5>
            <Input
              name="category"
              type="text"
              value={this.state.category}
              onChange={this.handleInputChange}
            />
            <p>QUESTION 1:</p>
            <Input
              placeholder="easiest question here"
              name="q1"
              type="text"
              value={this.state.q1}
              onChange={this.handleInputChange}
            />
            <Input
              placeholder="answer"
              name="a1"
              type="text"
              value={this.state.a1}
              onChange={this.handleInputChange}
            />
            <p>QUESTION 2:</p>
            <Input
              placeholder="question"
              name="q2"
              type="text"
              value={this.state.q2}
              onChange={this.handleInputChange}
            />
            <Input
              placeholder="answer"
              name="a2"
              type="text"
              value={this.state.a2}
              onChange={this.handleInputChange}
            />
            <p>QUESTION 3:</p>
            <Input
              placeholder="question"
              name="q3"
              type="text"
              value={this.state.q3}
              onChange={this.handleInputChange}
            />
            <Input
              placeholder="answer"
              name="a3"
              type="text"
              value={this.state.a3}
              onChange={this.handleInputChange}
            />
            <p>QUESTION 4:</p>
            <Input
              placeholder="question"
              name="q4"
              type="text"
              value={this.state.q4}
              onChange={this.handleInputChange}
            />
            <Input
              placeholder="answer"
              name="a4"
              type="text"
              value={this.state.a4}
              onChange={this.handleInputChange}
            />
            <p>QUESTION 5:</p>
            <Input
              placeholder="most difficult question here"
              name="q5"
              type="text"
              value={this.state.q5}
              onChange={this.handleInputChange}
            />
            <Input
              placeholder="answer"
              name="a5"
              type="text"
              value={this.state.a5}
              onChange={this.handleInputChange}
            />

            <hr />
            {/* {categories} */}
            <Button type="primary" onClick={this.submitCategoryHandler}>
              SUBMIT CATEGORY
            </Button>
          
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      state
    }
  }
  
  export default connect(mapStateToProps, { navCreateGame })(GameEdit)