import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Home';
import Pubblica from '../Pubblica';

//
class Page extends Component {
  render() {
    return (
      <Switch>
        <Route path="/pubblica/:id" component={Pubblica} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Page;
