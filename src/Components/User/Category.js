import React, { Component } from "react";
import { Input } from "antd";
import "../../scss/App.scss";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          categoryName: "",
          Q1: '', 
          A1: '', 
          Q2: '', 
          A2: '', 
          Q3: '', 
          A3: '', 
          Q4: '', 
          A4: '', 
          Q5: '', 
          A5: '',
        }
      ]
    }
  }
  componentDidMount(){
      this.setState({
          categoryName: this.props.category.categoryName
      })
  }
  

  render() {
    let {index} = this.props;
    console.log('index: ', index);
    console.log(this.state);
    return (
      <div>
        <Input placeholder="Categorie Title" onChange={e => this.props.handleCategorie(e, index)} />
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
      </div>
    );
  }
}
