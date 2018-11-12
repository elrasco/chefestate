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
      <Row className="PianoDescrizione" id={this.props.id}>
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
            <Button onClick={this.defineProperty('sa')} title="Sala ristorante" icon="plus">
              Sa
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
