import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button } from 'antd';
import './DatiDiBase.css';
export default class DatiDiBase extends Component {
  render() {
    return (
      <div className="DatiDiBase">
        <Divider orientation="left">Dati di base </Divider>
        <Row>
          <Col sm={8}>
            <Form.Item label="Canna fumaria" className="canna-fumaria" colon={false}>
              <Checkbox />
            </Form.Item>
          </Col>

          <Col sm={8}>
            <Form.Item label="Cucina completa" className="cucina" colon={false}>
              <Checkbox />
            </Form.Item>
          </Col>

          <Col sm={8}>
            <Form.Item label="Canna fumaria" className="canna-fumaria" colon={false}>
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>
      </div>
    );
  }
}
