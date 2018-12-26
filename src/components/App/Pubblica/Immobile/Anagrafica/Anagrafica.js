import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button } from 'antd';

import { api } from '../../../../../services';

import './Anagrafica.css';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Anagrafica extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        addresses: [],
        address: null
      });
  }
  addressSearch = value => {
    this.setState({ address: null });
    return api('address', `${value} `).then(response => {
      this.setState({ addresses: response.predictions });
    });
  };

  addressSelect = value => {
    const address = this.state.addresses.find(address => address.place_id === value);
    this.setState({ address });
    //TODO: search nearby
  };

  changeTitle = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.annuncio.title = e.target.value;
  };

  render() {
    const { pubblicaStore } = this.props;
    const { addresses } = this.state;
    const addressOptions = addresses.map(address => <AutoComplete.Option key={address.place_id}>{address.description}</AutoComplete.Option>);
    return (
      <div className="Anagrafica">
        <Divider orientation="left">Anagrafica</Divider>

        <Form.Item label="Nome" className="nome" colon={false}>
          <Input value={pubblicaStore.annuncio.title} onChange={this.changeTitle} />
        </Form.Item>
        <Form.Item label="Indirizzo" colon={false}>
          <AutoComplete name="address" onSearch={this.addressSearch} onSelect={this.addressSelect}>
            {addressOptions}
          </AutoComplete>
          <Form.Item label="Nascondi indirizzo preciso" className="nascondi-indirizzo" colon={false}>
            <Checkbox />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Società" className="società" colon={false}>
          <Input />
        </Form.Item>
        <Form.Item label="Persona di contatto" className="contatto" colon={false}>
          <Input />
        </Form.Item>
        <Row>
          <Col sm={12} style={{ paddingRight: '10px' }}>
            <Form.Item label="Tel 1" className="email" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col sm={12} style={{ paddingLeft: '10px' }}>
            <Form.Item label="Email 1" className="email" colon={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </div>
    );
  }
}
