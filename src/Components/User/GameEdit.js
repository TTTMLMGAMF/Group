import React, {Component} from 'react';
import "../../scss/App.scss";
import axios from 'axios';
import { connect } from 'react-redux';
import { navCreateGame } from '../../ducks/reducer';
import { Button, Input} from "antd";
import SideDrawer from './../SideDrawer';

  
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
          <SideDrawer/>
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
            <input
              name="category"
              type="text"
              value={this.state.category}
              onChange={this.handleInputChange}
            >{category}</input>
            <p>QUESTION 1:</p>
            <input
              placeholder="easiest question here"
              name="q1"
              type="text"
              value={this.state.q1}
              onChange={this.handleInputChange}
            >{q1}</input>
            <input
              placeholder="answer"
              name="a1"
              type="text"
              value={this.state.a1}
              onChange={this.handleInputChange}
            >{a1}</input>
            <p>QUESTION 2:</p>
            <input
              placeholder="question"
              name="q2"
              type="text"
              value={this.state.q2}
              onChange={this.handleInputChange}
            >{q2}</input>
            <input
              placeholder="answer"
              name="a2"
              type="text"
              value={this.state.a2}
              onChange={this.handleInputChange}
            >{a2}</input>
            <p>QUESTION 3:</p>
            <input
              placeholder="question"
              name="q3"
              type="text"
              value={this.state.q3}
              onChange={this.handleInputChange}
            >{q3}</input>
            <input
              placeholder="answer"
              name="a3"
              type="text"
              value={this.state.a3}
              onChange={this.handleInputChange}
            >{a3}</input>
            <p>QUESTION 4:</p>
            <input
              placeholder="question"
              name="q4"
              type="text"
              value={this.state.q4}
              onChange={this.handleInputChange}
            >{q4}</input>
            <input
              placeholder="answer"
              name="a4"
              type="text"
              value={this.state.a4}
              onChange={this.handleInputChange}
            >a4</input>
            <p>QUESTION 5:</p>
            <input
              placeholder="most difficult question here"
              name="q5"
              type="text"
              value={this.state.q5}
              onChange={this.handleInputChange}
            >{q5}</input>
            <input
              placeholder="answer"
              name="a5"
              type="text"
              value={this.state.a5}
              onChange={this.handleInputChange}
            >{a5}</input>

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