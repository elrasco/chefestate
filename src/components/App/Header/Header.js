import React, { Component } from 'react';

import { Row, Col, Menu, Avatar, Dropdown, Icon, Badge, Modal, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import { api } from '../../../services';

import StatusIcon from '../../../common/icons/StatusIcon';
import CarIcon from '../../../common/icons/CarIcon';
import SupportagentIcon from '../../../common/icons/SupportIcons/SupportagentIcon';
import TelephoneIcon from '../../../common/icons/SupportIcons/TelephoneIcon';
import EnvelopeIcon from '../../../common/icons/SupportIcons/EnvelopeIcon';

import logo from '../../../common/images/logoAir.png';
import './Header.css';

import { observer, inject } from 'mobx-react';

@inject('translationsStore')
@observer
class Header extends Component {
  render() {
    const { translationsStore } = this.props;

    const [telephone, email] = ['0381092120', 'info@myair.io'];
    return (
      <div className="Header">
        <div className="logo">
          <div>Logo</div>
        </div>
        <div className="right">
          <Link className="btn" to="/pubblica">
            <Icon type="plus-circle" theme="filled" />
            <span>Pubblica il tuo annuncio</span>
          </Link>
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
