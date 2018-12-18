import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavigationCard from './NavigationCard';
import Immobile from './Immobile';
import Struttura from './Struttura';
import Soldi from './Soldi';

import './Pubblica.css';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Pubblica extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { pubblicaStore, match } = this.props;
    pubblicaStore.load(match.params.id);
  }

  render() {
    const { match, location } = this.props;
    return (
      <div className="Pubblica">
        <div className="container">
          <NavigationCard />
          <Switch>
            <Route path={`${match.url}/immobile`} component={Immobile} />
            <Route path={`${match.url}/struttura`} component={Struttura} />
            <Route path={`${match.url}/soldi`} component={Soldi} />
            <Redirect from={`${match.url}`} to={`${match.url}/immobile`} />
          </Switch>
        </div>
      </div>
    );
  }
}
