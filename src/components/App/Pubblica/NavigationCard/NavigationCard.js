import React, { Component } from 'react';
import { Card } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import EssentialIcon from '../../../../common/icons/Essential2';
import './NavigationCard.css';

@withRouter
export default class NavigationCard extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { match, location } = this.props;
    const selected = () => location.pathname.replace(match.url, '').replace('/', '');
    return (
      <div className="NavigationCard">
        <Card>
          <div className={`row-space-around-center items`}>
            <Link to={`${match.url}/immobile`} className={`column-center-center item ${selected() === 'immobile' ? 'active' : ''}`}>
              <EssentialIcon type="light" name="26-heart" />
              <div>Immobile</div>
            </Link>
            <Link to={`${match.url}/cucina`} className={`column-center-center item ${selected() === 'cucina' ? 'active' : ''}`}>
              <EssentialIcon type="light" name="16-plus-cricle" />
              <div>Cucina</div>
            </Link>
            <Link to={`${match.url}/soldi`} className={`column-center-center item ${selected() === 'soldi' ? 'active' : ''}`}>
              <EssentialIcon type="light" name="90-navigate" />
              <div>Soldi</div>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}
