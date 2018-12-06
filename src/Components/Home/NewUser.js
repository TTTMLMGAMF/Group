import React, { Component } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import axios from 'axios';
import '../../scss/App.scss';
import {withRouter} from 'react-router-dom';

const FormItem = Form.Item;

class NewUser extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            loading: false,
            email: '',
            password: '',
            confirmDirty: false,
            autoCompleteResult: []
        }
    }


    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    showModal = () => {
        // this.props.handleSwitch()
        this.setState({ visible: true })
    }

    handleOk = (e) => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
        //axios request to create new user with bcrypt
    }

    handleCancel = (e) => {
        console.log(e);
        // this.props.handleSwitch()
        this.setState({ visible: false })
    }

    handleSubmit = async (e) => {
        // console.log('before', this.state)
        e.preventDefault();
        await this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.setState({ email: values.email, password: values.password })
        });
        const { email, password } = this.state;
        if (email && password) {
            axios.post('/auth/register', { email, password })
                .then(res => {
                    // console.log('THIS ONE RIGHT HERE:', res)
                    const user = res.data;
                    if (user) {
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
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
        // console.log('after: ', this.state)
    }


    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Register
        </Button>
                <Modal
                    title="Register"
                    visible={this.state.visible}
                    // onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Password"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Confirm Password"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: 'Please confirm your password!',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" loading={this.state.loading} onClick={this.handleSubmit}>Register</Button>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create()(NewUser);

export default withRouter(WrappedRegistrationForm)