import React, { Component } from 'react';
import NewUser from './NewUser';
import { Modal, Button, Form, Icon, Input, Checkbox } from 'antd';
import '../../scss/App.scss';

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    // handleRegister = () => {
    //     this.setState({ visible: false })
    //     setTimeout(this.props.handleSwitch(), 1000)
    // }

    render() {
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
                            <div>{getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                            </div>
                            <div>
                                <Button type="primary" htmlType="submit" className="login-form-button">
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

export default WrappedNormalLoginForm
