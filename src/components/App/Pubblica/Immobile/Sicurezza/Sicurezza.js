import React, { Component } from 'react';
import './Sicurezza.css';
import { Checkbox, Form, Divider } from 'antd';
import { observer, inject } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Sicurezza extends Component {
  changeAllarme = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { allarme: e.target.checked }));
  };
  changeVideosorveglianza = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { videosorveglianza: e.target.checked }));
  };
  render() {
    const { immobile } = this.props.pubblicaStore.annuncio;
    return (
      <div className="Sicurezza">
        <Divider orientation="left">Sicurezza</Divider>
        <Form.Item label="Allarme" colon={false}>
          <Checkbox checked={immobile.allarme} onChange={this.changeAllarme} />
        </Form.Item>

        <Form.Item label="Video sorveglianza" colon={false}>
          <Checkbox checked={immobile.videosorveglianza} onChange={this.changeVideosorveglianza} />
        </Form.Item>
      </div>
    );
  }
}
