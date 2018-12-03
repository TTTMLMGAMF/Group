import React, { Component } from "react";

export default class DisplayModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            countDown: 10,
            time: 60000
        }
    }
    

  render() {
      if(this.state.countDown > 0){
    setTimeout(()=>{

        this.setState({
            countDown: this.state.countDown -1
        })
    }, 1000)
}
      
    return (
      <div className="dmContainer">
        <div className="dmQuestionContainer">
          <h1 className="dmQuestion">
            How many cups of sugar does it take to get to the moon?
          </h1>
          <div className="dmCountdown">
            {this.state.countDown}
          </div>
        </div>
      </div>
    );
  }
}

// componentDidMount() {
//     let countDown = this.state.countDown
//     for (let i = 0; i > countDown; i++) {
//       return setTimeout(() => this.setState({ countDown: countDown-- }), 1000);
//     }
//   }