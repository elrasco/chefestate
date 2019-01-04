import React, { Component } from 'react';
import './Visibilita.css';
import { Divider, Form, Input, InputNumber } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Visibilita extends Component {
  changeValue = vetrine => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { vetrine }));
  };

  render() {
    const { vetrine } = this.props.pubblicaStore.annuncio.immobile;
    return (
      <div className="Visibilita">
        <Divider orientation="left">Visibilità</Divider>
        <Form.Item label="vetrine su strada" colon={false}>
          <InputNumber value={vetrine} onChange={this.changeValue} />
        </Form.Item>
      </div>
    );
  }
}
