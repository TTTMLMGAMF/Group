import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import '../../scss/App.scss'


class ControlModal extends Component {
    constructor() {
        super();
        this.state = {
            team: [],
            disabled: false,
            visible: false,
            room: 'things',
            index: 0
        }
    }

    async componentDidMount() {
        await this.setState({
            room: this.props.room,
            team: this.props.team
        })
    }


    render() {
        const { visible, question_answer_id } = this.props.qa;
        return (
            <div>

                <button className='gcBtn' disabled={this.props.qa.disabled} type="primary" onClick={() => this.props.showModal(question_answer_id)}>
                    <p>{this.props.i + 1}00</p>
                </button>
                <Modal
                    visible={visible}
                    title={this.props.category}
                    onOk={this.handleOk}
                    onCancel={() => this.props.handleCancel(question_answer_id)}
                    centered={true}
                    zIndex={4}
                    width='70vw'
                    bodyStyle={{
                        width: '70vw',
                        fontSize: '2vw',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignContent: 'middle',
                        padding: '2.5vw',
                        alignText: 'left'
                    }}
                    style={{
                        position: 'absolute',
                        top: '10vh',
                        left: '15vw'
                    }}
                    footer={
                        <div className='pointTracker'>
                            <button className='answerBtn'onClick={() => this.props.showAnswer(question_answer_id)}>ANSWER</button>
                            {this.props.team.map((team, i) => (
                                <div className='ptTeam' key={i}>
                                    <h4>{team.teamName}</h4>
                                    <div>
                                        <button key={i + 200} style={{ backgroundColor: "transparent", border: "0px", paddingLeft: '0' }} shape='circle' onClick={() => this.props.handleMinus(i, question_answer_id)} ><Icon style={{ fontSize: '5em', color: 'red' }} type="minus-circle" /></button>
                                        <button key={i + 100} style={{ backgroundColor: "transparent", border: "0px", paddingLeft: '0' }} shape='circle' onClick={() => this.props.handleAdd(i, question_answer_id)} ><Icon style={{ fontSize: '5em', color: '#99C24D' }} type="plus-circle" /></button>
                                        <div id='borderLine'></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                >   <div className='gcModalText'>
                        <h1><span style={{ fontWeight: 'bolder', textTransform: 'capitalize' }}>Question:</span>    {this.props.qa.question}</h1>
                        <hr />
                        <h1><span style={{ fontWeight: 'bolder', textTransform: 'capitalize' }}>Answer:</span>  {this.props.qa.answer}</h1>
                        <hr />
                        <p><span style={{ fontWeight: 'bolder', textTransform: 'capitalize' }}>Points:</span>   {this.props.qa.points}</p>
                    </div>
                </Modal>
            </div >
        )
    }
}




export default ControlModal


