import React, { Component } from 'react';
import './Plus.css';
import { inject, observer } from 'mobx-react';
import { Divider, Checkbox, Form, Select } from 'antd';

@inject('pubblicaStore')
@observer
export default class Plus extends Component {
  changeBanconeBar = e => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { banconeBar: e.target.checked }));
  };

  changeParcheggio = parcheggio => {
    const { pubblicaStore } = this.props;
    pubblicaStore.updateImmobile(Object.assign({}, pubblicaStore.annuncio.immobile, { parcheggio }));
  };
  render() {
    const { immobile } = this.props.pubblicaStore.annuncio;
    return (
      <div className="Plus">
        <Divider orientation="left">Plus</Divider>
        <Form.Item label="Bancone bar" colon={false}>
          <Checkbox checked={immobile.banconeBar} onChange={this.changeBanconeBar} />
        </Form.Item>

        <Form.Item label="Parcheggio clienti" colon={false} className={`reverse parcheggio`}>
          <Select value={immobile.parcheggio || 0} onChange={this.changeParcheggio} width="142px">
            <Select.Option value={0}>Assente</Select.Option>
            <Select.Option value={1}>Di proprietà</Select.Option>
            <Select.Option value={2}>In convenzione</Select.Option>
          </Select>
        </Form.Item>
      </div>
    );
  }
}
