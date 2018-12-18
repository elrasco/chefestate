import React, { Component } from 'react';

import { Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router';

import { api } from '../../../services';

import './Header.css';

import { observer, inject } from 'mobx-react';

@withRouter
@inject('translationsStore')
@observer
class Header extends Component {
  createAndGo = () => {
    api('create ad').then(({ id }) => {
      this.props.history.push(`/pubblica/${id}`);
    });
  };
  render() {
    const { translationsStore } = this.props;

    const [telephone, email] = ['0381092120', 'info@myair.io'];
    return (
      <div className="Header">
        <div className="logo">
          <div>Logo</div>
        </div>
        <div className="right">
          <div className="btn" onClick={this.createAndGo}>
            <Icon type="plus-circle" theme="filled" />
            <span>Pubblica il tuo annuncio</span>
          </div>
          <div className="btn">
            <Icon type="heart" theme="filled" />
            <span>I tuoi preferiti</span>
          </div>
          <div className="btn">
            <Icon type="user" />
            <span>Accesso utenti</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
