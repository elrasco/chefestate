import React, { Component } from 'react';
import { Divider, Form, InputNumber } from 'antd';
import './VetrineSuStarda.css';
export default class VetrineSuStarda extends Component {
  render() {
    return (
      <div className="VetrineSuStarda">
        <Divider orientation="left">Vetrine su strada </Divider>
        <Form.Item label="mq" className="superficie" colon={false}>
          <InputNumber name="mq" />
        </Form.Item>
        trineSuStarda
      </div>
    );
  }
}
