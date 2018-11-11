import React, { Component } from 'react';
import './Login.css';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import { Layout } from 'antd';

import LoginForm from './LoginForm';

@inject('authStore')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.props.authStore.logout();
  }

  render() {
    const { authStore } = this.props;
    if (!authStore.isLoggedIn) {
      return (
        <Layout className="LoginLayout">
          <Layout.Content className="LoginLayoutContent">
            <LoginForm />
          </Layout.Content>
        </Layout>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Login;
