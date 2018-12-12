import React, { Component } from 'react';
import { Modal, Button } from 'antd';
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
        console.log(visible)
        return (
            <div>

                <button className='gcBtn' disabled={this.props.qa.disabled} type="primary" onClick={() => this.props.showModal(question_answer_id)}>
                    Question: {this.props.i + 1}
                </button>
                <Modal
                    visible={visible}
                    title={this.props.category}
                    onOk={this.handleOk}
                    onCancel={() => this.props.handleCancel(question_answer_id)}
                    centered={true}
                    footer={[
                        <div>
                            {this.props.team.map((team, i) => (
                                <div key={i}>
                                    <p>{team.teamName}</p>
                                    <Button key={i + 200} onClick={() => this.props.handleMinus(i, question_answer_id)} > - </Button>
                                    <Button key={i + 100} type='primary' onClick={() => this.props.handleAdd(i, question_answer_id)} > + </Button>
                                </div>
                            ))}
                        </div>
                    ]}
                >
                    <h1>Question: {this.props.qa.question}</h1>
                    <h1>Answer: {this.props.qa.answer}</h1>
                    <p>Points: {this.props.qa.points}</p>
                </Modal>
            </div >
        )
    }
}




export default ControlModal


