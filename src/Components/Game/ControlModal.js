import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import '../../scss/App.scss'

class ControlModal extends Component {
    state = {
        disabled: false,
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    }

    handleAdd = (i) => {
        this.props.handleScore(this.props.qa.points, i)
        this.setState({ visible: false, disabled: true });

    }

    handleMinus = (i) => {
        this.props.handleScore(-this.props.qa.points, i)
    }

    handleCancel = () => {
        this.setState({ visible: false })
    }

    render() {
        const { visible, disabled } = this.state;
        // console.log(this.props.qa)
        return (
            <div>

                <button className='gcBtn' disabled={disabled} type="primary" onClick={this.showModal}>
                    Question: {this.props.i}
                </button>
                <Modal
                    visible={visible}
                    title={this.props.catagory}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered={true}
                    footer={[
                        <div>
                            <p>Team 1</p>
                            <Button key="team1.1" onClick={() => this.handleMinus(0)}>-</Button>
                            <Button key="team1.2" type="primary" onClick={() => this.handleAdd(0)}> + </Button>
                            <p>Team 2</p>
                            <Button key="team2.1" onClick={() => this.handleMinus(1)}> - </Button>
                            <Button key="team2.2" type="primary" onClick={() => this.handleAdd(1)}> + </Button>
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

