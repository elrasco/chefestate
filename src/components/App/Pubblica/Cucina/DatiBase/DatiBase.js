import React, { Component } from 'react';
import './DatiBase.css';
import { Divider, Form, InputNumber, Rate } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class DatiBase extends Component {
  onChangeCucina = field => value => {
    const { pubblicaStore } = this.props;
    let obj = {};
    obj[field] = value;
    pubblicaStore.updateCucina(Object.assign({}, pubblicaStore.annuncio.cucina, obj));
  };

  render() {
    const { pubblicaStore } = this.props;
    return (
      <div className="DatiBase">
        <Divider orientation="left">Dati di base</Divider>
        <div className="wrapper">
          <Form.Item label="mq" className="reverse" colon={false}>
            <InputNumber value={pubblicaStore.annuncio.cucina.mq} onChange={this.onChangeCucina('mq')} />
          </Form.Item>

          <Form.Item label="nro fuochi" className="reverse" colon={false}>
            <InputNumber value={pubblicaStore.annuncio.cucina.fuochi} onChange={this.onChangeCucina('fuochi')} />
          </Form.Item>

          <Form.Item label="stato generale" className="reverse" colon={false}>
            <Rate allowHalf={true} count={3} value={pubblicaStore.annuncio.cucina.rate} onChange={this.onChangeCucina('rate')} />
          </Form.Item>
        </div>
      </div>
    );
  }
}
