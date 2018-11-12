import React, { Component } from 'react';

import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select } from 'antd';

import PianoDescrizione from '../PianoDescrizione';
import './PianiDescrizione.css';

export default class PianiDescrizione extends Component {
  constructor(props) {
    super(props);
    this.state = { Piani: [] };
  }

  componentDidMount() {
    this.addPiano();
  }

  addPiano = value => {
    let Piani = this.state.Piani;
    Piani.push(<PianoDescrizione />);
    this.setState({ Piani });
  };

  eliminaPiano = piano => () => {
    let Piani = this.state.Piani;
    Piani.splice(piano, 1);
    this.setState({ Piani });
  };

  render() {
    return (
      <div className="PianiDescrizione">
        <Form.Item label="Quanti piani ci sono?" className="piani" colon={false}>
          <InputNumber value={this.state.Piani.length} name="piani" onChange={this.addPiano} style={{ width: '90px' }} />
        </Form.Item>

        <h3>Descrivici tutti gli spazi in ogni piano</h3>
        {this.state.Piani.map((Piano, i) => (
          <div key={i} className="piano-descrizione-item">
            {Piano}
            <Button icon="close" shape="circle" onClick={this.eliminaPiano(i)} />
          </div>
        ))}
      </div>
    );
  }
}
