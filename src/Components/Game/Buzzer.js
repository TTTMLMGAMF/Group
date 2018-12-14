import React, { Component } from 'react';


export default class Buzzer extends Component {
constructor () {
    super();
    this.state = {
        name: ''
    }
}

    render() {
        return(
            <div>
                <div className='buzzerContainer'>
                    <div className='buzzerBox'> 
                        <h1>{this.state.name}</h1>
                        <button>PUSH</button>
                    </div>
                </div>
                <h1>{this.state.name}</h1>
                <button>PUSH</button>
            </div>
        )
    }
}