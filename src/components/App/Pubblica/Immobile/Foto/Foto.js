import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button } from 'antd';

import './Foto.css';
export default class Foto extends Component {
  render() {
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="Foto">
        <Divider orientation="left">Foto</Divider>
        <div className="upload">
          <Row>
            <Upload listType="picture-card">{uploadButton}</Upload>
          </Row>
        </div>
      </div>
    );
  }
}
