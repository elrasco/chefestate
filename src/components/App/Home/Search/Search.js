import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import './Search.css';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        alert('ok');
      } else {
        alert(err);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="Search" onSubmit={this.handleSubmit}>
        {getFieldDecorator('value1', {
          rules: [{ required: true, message: 'Please enter your username!' }]
        })(<Input placeholder="che zona" prefix={<Icon type="environment" />} />)}

        {getFieldDecorator('value2', {
          rules: [{ required: true, message: 'Please enter your username!' }]
        })(<Input placeholder="che zona" prefix={<Icon type="environment" />} />)}

        {getFieldDecorator('value3', {
          rules: [{ required: true, message: 'Please enter your username!' }]
        })(<Input placeholder="che zona" prefix={<Icon type="environment" />} />)}
        <Button type="primary" htmlType="submit">
          Cerca
        </Button>
      </Form>
    );
  }
}

export default Form.create()(Search);
