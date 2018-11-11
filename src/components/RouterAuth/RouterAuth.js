import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '../App';
import Login from '../Login';

import { observer, inject } from 'mobx-react';

@inject('authStore')
@observer
class RouterAuth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoggedIn } = this.props.authStore;
    console.log(isLoggedIn);

    return (
      <Router>
        <Switch>
          <Route path="/logout" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/pubblica" render={() => (isLoggedIn ? <App /> : <Redirect to="/login?from=/pubblica" />)} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}

export default RouterAuth;
