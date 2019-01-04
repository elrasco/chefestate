import React, { Component } from 'react';
import './Impianti.css';
import { Divider, Form, Checkbox, Select } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Impianti extends Component {
  changeVentilazione = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { ventilazione: e.target.checked }));
  };
  changeAriacondizionata = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { ariacondizionata: e.target.checked }));
  };
  changeRiscaldamento = riscaldamento => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { riscaldamento }));
  };
  render() {
    const { immobile } = this.props.pubblicaStore.annuncio;
    return (
      <div className="Impianti">
        <Divider orientation="left">Impianti</Divider>
        <Form.Item label="Sistema ventilazione" colon={false}>
          <Checkbox checked={immobile.ventilazione} onChange={this.changeVentilazione} />
        </Form.Item>

        <Form.Item label="Aria condizionata" colon={false}>
          <Checkbox checked={immobile.ariacondizionata} onChange={this.changeAriacondizionata} />
        </Form.Item>

        <Form.Item label="Riscaldamento" colon={false} className="reverse riscaldamento">
          <Select value={immobile.riscaldamento || 0} onChange={this.changeRiscaldamento} width="142px">
            <Select.Option value={0}>Assente</Select.Option>
            <Select.Option value={1}>Autonomo</Select.Option>
            <Select.Option value={2}>Centralizzato</Select.Option>
          </Select>
        </Form.Item>
      </div>
    );
  }
}
