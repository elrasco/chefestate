import React, { Component } from 'react';
import { InputNumber, Select } from 'antd';

import './SelectDehor.css';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class SelectDehor extends Component {
  onChangePresente = presente => {
    const { pubblicaStore } = this.props;
    const { dehor } = pubblicaStore.annuncio.immobile.planimetria;
    this.props.pubblicaStore.updateDehor(Object.assign({}, dehor, { presente }));
  };

  onChangeMq = mq => {
    console.log(mq);
    const { pubblicaStore } = this.props;
    const { dehor } = pubblicaStore.annuncio.immobile.planimetria;
    this.props.pubblicaStore.updateDehor(Object.assign({}, dehor, { mq }));
  };
  render() {
    const { dehor } = this.props.pubblicaStore.annuncio.immobile.planimetria;
    return (
      <div className="SelectDehor">
        <div className="label">C'è un dehor?</div>
        <Select value={dehor.presente} onChange={this.onChangePresente}>
          <Select.Option key={0} value={0}>
            no
          </Select.Option>
          <Select.Option key={1} value={1}>
            si
          </Select.Option>
        </Select>
        {dehor.presente === 1 && (
          <div className="mq">
            <div className="label">mq: </div>
            <InputNumber value={dehor.mq} onChange={this.onChangeMq} />
          </div>
        )}
      </div>
    );
  }
}
