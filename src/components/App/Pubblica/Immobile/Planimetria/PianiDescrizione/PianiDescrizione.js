import React, { Component } from 'react';

import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select } from 'antd';

import PianoDescrizione from '../PianoDescrizione';
import './PianiDescrizione.css';

export default class PianiDescrizione extends Component {
  constructor(props) {
    super(props);
    this.state = { Piani: [], piani: 0 };
  }

  onChangePiani = value => {
    this.setState({ piani: value });
    let Piani = [];
    for (let i = 0; i < value; i++) {
      Piani.push(<PianoDescrizione id={`piano-descrizione_${i}`} index={i} />);
    }
    this.setState({ Piani });
  };

  render() {
    return (
      <div className="PianiDescrizione">
        <Form.Item label="Quanti piani ci sono?" className="piani" colon={false}>
          <InputNumber value={this.state.piani} name="piani" onChange={this.onChangePiani} style={{ width: '90px' }} />
        </Form.Item>

        <h3>Descrivici tutti gli spazi in ogni piano</h3>
        {this.state.Piani.map((Piano, i) => (
          <div key={i} className="piano-descrizione-item">
            {Piano}
            <Button icon="close" shape="circle" />
          </div>
        ))}
      </div>
    );
  }
}
