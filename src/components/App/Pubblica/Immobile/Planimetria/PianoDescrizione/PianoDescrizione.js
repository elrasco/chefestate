import React, { Component } from 'react';
import { Collapse, Form, Input, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select } from 'antd';

import Modals from './Modals';

import './PianoDescrizione.css';
import { inject, observer } from 'mobx-react';

import Sale from './Sale';

const Panel = Collapse.Panel;

@inject('pubblicaStore')
@observer
export default class PianoDescrizione extends Component {
  onChangePiano = piano => {
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, { piano }));
  };

  onChangeMq = mq => {
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, { mq }));
  };

  onChangeCoperti = coperti => {
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, { coperti }));
  };

  onChangeSalaPresente = e => {
    const sala = Object.assign({}, this.props.piano.sala, { presente: e.target.checked });
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, { sala }));
  };

  render() {
    const { piano, pubblicaStore } = this.props;
    return (
      <Row className="PianoDescrizione" id={this.props.id}>
        <Row>
          <Col sm={4} className="field">
            <Form.Item label="Piano" className="piano" colon={false}>
              <Select placeholder="Seleziona il piano" value={piano.piano} onChange={this.onChangePiano}>
                <Select.Option key={0} value="1">
                  Interrato
                </Select.Option>
                <Select.Option key={1} value="2">
                  Terra
                </Select.Option>
                <Select.Option key={2} value="3">
                  Primo
                </Select.Option>
                <Select.Option key={3} value="4">
                  Secondo
                </Select.Option>
                <Select.Option key={4} value="5">
                  Terzo
                </Select.Option>
                <Select.Option key={5} value="6">
                  Maggiore del terzo
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={2} className="field" style={{ width: '120px' }}>
            <Form.Item label="mq" className="superficie" colon={false}>
              <InputNumber name="mq" value={piano.mq} onChange={this.onChangeMq} />
            </Form.Item>
          </Col>
          <Col sm={2} className="field" style={{ width: '120px' }}>
            <Form.Item label="coperti" className="coperti" colon={false}>
              <InputNumber name="coperti" value={piano.coperti} onChange={this.onChangeCoperti} />
            </Form.Item>
          </Col>
        </Row>
        <div>Descrivi i locali</div>
        <div className="dettagli">
          <div className="sale">
            <Checkbox checked={piano.sala.presente} onChange={this.onChangeSalaPresente}>
              Sala
            </Checkbox>
            {piano.sala.presente && <Sale piano={this.props.piano} />}
          </div>
          <div className="wc">
            <Checkbox>WC</Checkbox>
          </div>
          <div className="terrazza">
            <Checkbox>Terrazza</Checkbox>
          </div>
          <div className="magazzino">
            <Checkbox>Magazzino</Checkbox>
          </div>
        </div>
      </Row>
    );
  }
}
