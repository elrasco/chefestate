import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select } from 'antd';
import './Planimetria.css';
import PianiDescrizione from './PianiDescrizione';
export default class Planimetria extends Component {
  render() {
    return (
      <div className="Planimetria">
        <Divider orientation="left">Planimetria </Divider>
        <PianiDescrizione />
      </div>
    );
  }
}
