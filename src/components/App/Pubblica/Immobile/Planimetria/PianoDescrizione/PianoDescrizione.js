import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select } from 'antd';

import Modals from './Modals';

import './PianoDescrizione.css';
export default class PianoDescrizione extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  defineProperty = tipo => e => {
    this.setState({ showModal: tipo });
  };
  render() {
    return (
      <Row className="PianoDescrizione" id="piano-descrizione">
        <Col sm={4} className="field">
          <Form.Item label="Piano" className="piano" colon={false}>
            <Select placeholder="Seleziona il piano">
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
            <InputNumber name="mq" />
          </Form.Item>
        </Col>
        <Col sm={2} className="field" style={{ width: '120px' }}>
          <Form.Item label="coperti" className="coperti" colon={false}>
            <InputNumber name="coperti" />
          </Form.Item>
        </Col>
        <Col sm={14} className="field" className="properties">
          <Form.Item label="Cosa c'è in questo spazio" className="property" colon={false}>
            <Button onClick={this.defineProperty('sa')} title="Sala ristorante">
              Sa
            </Button>
            <Button onClick={this.defineProperty('cu')} title="Cucina">
              Cu
            </Button>
            <Button onClick={this.defineProperty('uf')} title="Ufficio">
              Uf
            </Button>
            <Button onClick={this.defineProperty('te')} title="Terrazza">
              Te
            </Button>
            <Button onClick={this.defineProperty('ma')} title="Magazzino">
              Ma
            </Button>
            <Button onClick={this.defineProperty('sp')} title="Spogliatoio">
              Sp
            </Button>
            <Button onClick={this.defineProperty('bc')} title="Bagno clienti">
              Bc
            </Button>
            <Button onClick={this.defineProperty('bd')} title="Bagno dipendenti">
              Bd
            </Button>
            <Button onClick={this.defineProperty('lt')} title="Locali tecnici">
              Lt
            </Button>
            <Button onClick={this.defineProperty('ca')} title="Cantina">
              Ca
            </Button>
            <Button onClick={this.defineProperty('al')} title="Altro">
              Al
            </Button>
          </Form.Item>
        </Col>
        <Modals
          showModal={this.state.showModal}
          index={this.props.index}
          onCancel={() => this.setState({ showModal: null })}
          onOk={(name, index, values) => {
            console.log(name, index, values);
          }}
        />
      </Row>
    );
  }
}
