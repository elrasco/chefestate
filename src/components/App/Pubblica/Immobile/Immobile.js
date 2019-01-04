import React, { Component } from 'react';
import { Card, Form, Divider } from 'antd';

import Anagrafica from './Anagrafica';

import './Immobile.css';
import Planimetria from './Planimetria';
import DatiDiBase from './DatiDiBase';
import Visibilita from './Visibilita';

import Plus from './Plus';
import Impianti from './Impianti';
import Sicurezza from './Sicurezza';

export default class Immobile extends Component {
  constructor(props) {
    super(props);
  }

  onChangePlanimetria = planimetria => {
    console.log(planimetria);
  };
  render() {
    return (
      <Card className="Immobile" bordered={false}>
        <Form>
          <Anagrafica />
          <DatiDiBase />
          <Planimetria />
          <div className="others">
            <Visibilita />
            <Plus />
            <Impianti />
            <Sicurezza />
          </div>
          <Divider orientation="left" />
        </Form>
      </Card>
    );
  }
}
