import React, { Component } from 'react';
import NewUser from './NewUser';
import { Modal, Button, Form, Icon, Input } from 'antd';
import '../../scss/App.scss';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const FormItem = Form.Item;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            email: '',
            password: ''
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        //axios request for bcrypt login
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.setState({email: values.userName, password: values.password});
        });
        const {email, password} = this.state;
        if(email && password){
        axios.post('/auth/login', {email, password})
        .then(res => {
            // console.log('LOOK HERE:', res)
            const user = res.data;
            if (user.account_id) {
                // this.props.updateUser(user);
                this.props.history.push('/userhome')
            } else {
                alert('Please enter a valid email and password')
            }
        })
        .catch(err => {
            console.log(err);
        });
        }
    }

    // handleRegister = () => {
    //     this.setState({ visible: false })
    //     setTimeout(this.props.handleSwitch(), 1000)
    // }

    render() {
        // console.log(this.props)
        // console.log('this one',this.state)
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Login
                </Button>
                <Modal
                    title="Login"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {/* <div>{getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                            </div> */}
                            <div>
                                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
                                    Log in
                            </Button>
                                <NewUser />
                            </div>
                            {/* <div>
                                Or <a onClick={() => this.props.handleRegister()} href=''>register now!</a>
                            </div> */}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default withRouter(WrappedNormalLoginForm)
