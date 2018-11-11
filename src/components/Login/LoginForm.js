import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Form, Input, Icon, Button, Row, Spin } from 'antd';

import './LoginForm.css';

@inject('authStore', 'commonStore')
@observer
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: false,
      loading: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { authStore } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        const loginAction = authStore.newPasswordRequired ? authStore.completeNewPassword : authStore.login;
        loginAction
          .bind(this.props.authStore)(values)
          .then(() => ({}))
          .catch(error => ({ error }))
          .then(({ error }) => {
            this.setState({ loading: false }, () => {
              if (error) {
                this.setState({ message: error.message });
              } else {
                this.props.authStore.setIsLoggedIn(true);
              }
            });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { authStore } = this.props;
    return (
      <Spin spinning={this.state.loading}>
        <Form onSubmit={this.handleSubmit} className="LoginForm">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please enter your username!' }]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please enter your Password!!' }]
            })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
          </Form.Item>
          {authStore.newPasswordRequired && (
            <Form.Item>
              {getFieldDecorator('newPassword', {
                rules: [{ required: true, message: 'Please enter your new Password!!' }]
              })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="New password" />)}
            </Form.Item>
          )}
          <Form.Item>
            <a className="LoginFormForgot" href="" style={{ visibility: authStore.newPasswordRequired ? 'hidden' : 'visible' }}>
              <span>Forgot password</span>
            </a>
            <Button type="primary" htmlType="submit" className="LoginFormButton">
              {!authStore.newPasswordRequired && <span>Log in</span>}
              {authStore.newPasswordRequired && <span>Save the new password</span>}
            </Button>
            <Row style={{ fontSize: '0.7rem', color: 'red' }}>{this.state.message}</Row>
          </Form.Item>
        </Form>
      </Spin>
    );
  }
}

export default Form.create()(LoginForm);
