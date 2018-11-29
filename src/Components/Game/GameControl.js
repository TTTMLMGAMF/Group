import React, { Component } from 'react';
import ControlModal from './ControlModal';
import '../../scss/App.scss'



class GameControl extends Component {
    constructor() {
        super()
        this.state = {
            gameName: "The Questions!",
            qa: [
                {
                    question: "How many cups of sugar does it take to get to the moon?",
                    answer: "3",
                    catagory: 1,
                    cn: "Things",
                    points: 100
                },
                {
                    question: "How many cups of salt does it take to get to the moon?",
                    answer: "17",
                    catagory: 1,
                    cn: "Things",
                    points: 200
                },
                {
                    question: "How do you code?",
                    answer: "Yes",
                    catagory: 1,
                    cn: "Things",
                    points: 300
                },
                {
                    question: "What is the best cohort ever?",
                    answer: "42",
                    catagory: 2,
                    cn: "Stuff",
                    points: 100
                },
                {
                    question: "Can we actually make this game?",
                    answer: "Try again later",
                    catagory: 3,
                    cn: "Other",
                    points: 100
                }
            ],
            team: [
                {
                    name: "Team 1",
                    points: 0
                },
                {
                    name: "Team Firelords",
                    points: 0
                }
            ]
        }
    }

    handleScore = (x, i) => {
        let newState = Object.assign({}, this.state);
        newState.team[i].points += x;
        this.setState(newState);
    }


    render() {
        let cOne = this.state.qa.filter(el => el.catagory === 1)
        let cTwo = this.state.qa.filter(el => el.catagory === 2)
        let cThree = this.state.qa.filter(el => el.catagory === 3)
        return (
            <div className='gcControlContainer'>

                {/* <div className='gcGame'> */}
                <h1>Game Control where the teacher controls the game</h1>
                <div className='gcColumnContainer'>

                    <div className="gcColumn">

                        <h2>{cOne[0].cn}</h2>
                        {cOne.map((qa, i) => (
                            <ControlModal key={i} catagory={cOne[0].cn} qa={qa} handleScore={this.handleScore} i={i + 1} />

                        ))}
                    </div>
                    <div className="gcColumn">

                        <h2>{cTwo[0].cn}</h2>
                        {cTwo.map((qa, i) => (
                            <ControlModal key={i} catagory={cTwo[0].cn} qa={qa} handleScore={this.handleScore} i={i + 1} />

                        ))}
                    </div>
                    <div className="gcColumn">

                        <h2>{cThree[0].cn}</h2>
                        {cThree.map((qa, i) => (
                            <ControlModal key={i} catagory={cThree[0].cn} qa={qa} handleScore={this.handleScore} i={i + 1} />

                        ))}
                    </div>
                </div>
                <div className='gcTeamContainer'>
                    <div className='gcTeam1'>
                        <div className='gcName'>
                            {this.state.team[0].name}
                        </div>
                        <div className='gcScore'>
                            {this.state.team[0].points}
                        </div>
                    </div>
                    <div className='gcTeam2'>
                        <div className='gcName'>
                            {this.state.team[1].name}
                        </div>
                        <div className='gcScore'>
                            {this.state.team[1].points}
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        )

    }




}


export default GameControl;