import React, { Component } from 'react';

import { Modal, Input } from 'antd';

import { isFunction } from 'lodash';

import './PromptModal.css';

const { TextArea } = Input;

export default class PromptModal extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaValue: '' };
  }

  open = (options = {}) => {
    const { title, content, onCancel, onOk, textarea } = options;
    console.log(content);
    this.setState({ visible: true, title, content, onCancel, onOk, textarea });
  };

  onCancel = () => {
    this.setState({ visible: false, textarea: '' });
    if (isFunction(this.state.onCancel)) {
      this.state.onCancel();
    }
  };

  onOk = () => {
    this.setState({ visible: false });
    if (isFunction(this.state.onOk)) {
      this.state.onOk(this.state.textareaValue);
    }
  };

  onChange = e => {
    this.setState({ textareaValue: e.target.value });
  };

  render() {
    return (
      <Modal title={this.state.title} visible={this.state.visible} onCancel={this.onCancel} onOk={this.onOk}>
        <div>{this.state.content}</div>
        {!!this.state.textarea && <TextArea value={this.state.textareaValue} onChange={this.onChange} />}
      </Modal>
    );
  }
}
