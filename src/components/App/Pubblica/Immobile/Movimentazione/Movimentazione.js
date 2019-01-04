import React, { Component } from 'react';
import './Movimentazione.css';
import { Divider, Form, Checkbox } from 'antd';
export default class Movimentazione extends Component {
  changeMontavivande = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { montavivande: e.target.checked }));
  };
  changeAscensore = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { ascensore: e.target.checked }));
  };
  render() {
    const { immobile } = this.props.pubblicaStore.annuncio;
    return (
      <div className="Movimentazione">
        <Divider orientation="left">Sicurezza</Divider>
        <Form.Item label="Montavivande" colon={false}>
          <Checkbox checked={immobile.montavivande} onChange={this.changeMontavivande} />
        </Form.Item>

        <Form.Item label="Ascensore" colon={false}>
          <Checkbox checked={immobile.ascensore} onChange={this.changeAscensore} />
        </Form.Item>
      </div>
    );
  }
}
