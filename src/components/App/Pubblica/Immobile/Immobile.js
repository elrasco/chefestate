import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button } from 'antd';
import { api } from '../../../../services';

import Anagrafica from './Anagrafica';
import Foto from './Foto';
import './Immobile.css';
import Planimetria from './Planimetria';
import DatiDiBase from './DatiDiBase';

const { TextArea } = Input;

export default class Immobile extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        addresses: [],
        address: null
      });
  }
  render() {
    return (
      <Card className="Immobile">
        <Form>
          <Anagrafica />
          <DatiDiBase />
          <Foto />
          <Planimetria />
          <Divider orientation="left" />
          <div className="buttons">
            <Button type="primary">Salva</Button>
          </div>
        </Form>
      </Card>
    );
  }
}
