import React, { Component } from 'react';
import './Cucina.css';
import { Card } from 'antd';
import DatiBase from './DatiBase';
import Attrezzatura from './Attrezzatura';
import DatiAttuali from './DatiAttuali';
import Giudizio from './Giudizio';
export default class Cucina extends Component {
  render() {
    return (
      <Card className="Cucina" bordered={false}>
        <div>
          <DatiBase />
          <Attrezzatura />
          <DatiAttuali />
          <Giudizio />
        </div>
      </Card>
    );
  }
}
