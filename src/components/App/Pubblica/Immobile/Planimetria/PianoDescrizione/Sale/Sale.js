import React, { Component } from 'react';
import { InputNumber } from 'antd';
import './Sale.css';
export default class Sale extends Component {
  render() {
    return (
      <div className="Sale">
        <div className="mq">
          mq: <InputNumber />
        </div>
        <div className="coperti">
          coperti: <InputNumber />
        </div>
      </div>
    );
  }
}
