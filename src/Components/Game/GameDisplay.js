import React, { Component } from "react";

class GameDisplay extends Component {
  render() {
    return (
      <div className="gdContainer">
        <h1>Game Title</h1>
        <div className="gdCategoryContainer">
          <div className="gdCategory">
            <h2>Category #1</h2>
            <div className="gdQuestion">Q1</div>
            <div className="gdQuestion">Q2</div>
            <div className="gdQuestion">Q3</div>
            <div className="gdQuestion">Q4</div>
            <div className="gdQuestion">Q5</div>
          </div>
          <div className="gdCategory">
            <h2>Category #2</h2>
            <div className="gdQuestion">Q1</div>
            <div className="gdQuestion">Q2</div>
            <div className="gdQuestion">Q3</div>
            <div className="gdQuestion">Q4</div>
            <div className="gdQuestion">Q5</div>
          </div>
          <div className="gdCategory">
            <h2>Category #3</h2>
            <div className="gdQuestion">Q1</div>
            <div className="gdQuestion">Q2</div>
            <div className="gdQuestion">Q3</div>
            <div className="gdQuestion">Q4</div>
            <div className="gdQuestion">Q5</div>
          </div>
        </div>
        <div className='gdTeamContainer'>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 1</div>
            <div gdTeamScore>SCORE: </div>
          </div>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 2</div>
            <div gdTeamScore>SCORE: </div>
          </div>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 3</div>
            <div gdTeamScore>SCORE: </div>
          </div>
          <div className='gdTeam'>
            <div className='gdTeamName'>TEAM 4</div>
            <div gdTeamScore>SCORE: </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameDisplay;
