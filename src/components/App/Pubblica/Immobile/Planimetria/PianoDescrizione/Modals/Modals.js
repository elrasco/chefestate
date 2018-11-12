import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Modal } from 'antd';

import './Modals.css';
export default class Modals extends Component {
  onOk = () => {
    this.props.onOk(this.props.showModal, this.props.index);
  };

  onCancel = () => {
    this.props.onCancel(this.props.showModal, this.props.index);
  };

  render() {
    const { showModal } = this.props;
    return (
      <div className="Modals" id="modals">
        <Modal visible={showModal === 'sa'} onOk={this.onOk} onCancel={this.onCancel} title="Titolo modale">
          <div>qui ci va la modale</div>
        </Modal>
      </div>
    );
  }
}
