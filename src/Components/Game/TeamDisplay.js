import React, { Component } from 'react';


class TeamDisplay extends Component {
    render() {
        return (
            <div className='gcTeamContainer'>
                <div className='gcTeam1'>
                    <div className='gcName'>
                        {this.props.team.teamName}
                    </div>
                    <div className='gcScore'>
                        {this.props.team.score}
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamDisplay