import React, { Component } from 'react';
import { InputNumber, Button } from 'antd';
import './Sale.css';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showdettaglio: false
    };
  }

  toggleShowdettaglio = () => {
    this.setState({ showdettaglio: !this.state.showdettaglio });
  };

  aggiungiDettaglioLocale = () => {
    this.props.pubblicaStore.addDettaglioLocale(this.props.piano.id, 'sala', { mq: 0, coperti: 0 });
  };

  eliminaDettaglioLocale = i => () => {
    this.props.pubblicaStore.eliminaDettaglioLocale(this.props.piano.id, 'sala', i);
  };

  onChangeMq = i => mq => {
    this.updateDettaglioLocale(i, 'mq', mq);
  };

  onChangeCoperti = i => coperti => {
    this.updateDettaglioLocale(i, 'coperti', coperti);
  };

  updateDettaglioLocale = (i, attr, value) => {
    this.props.piano['sala'].dettaglioLocali[i][attr] = value;
    this.props.pubblicaStore.updateDettaglioLocale(this.props.piano.id, 'sala', this.props.piano['sala'].dettaglioLocali);
  };

  render() {
    const { piano } = this.props;
    return (
      <div className="Sale">
        {this.state.showdettaglio === false && (
          <div className="tools">
            <div onClick={this.toggleShowdettaglio}>Mostra dettagli</div>
          </div>
        )}

        {this.state.showdettaglio === true && (
          <div className="dettaglio">
            <div className="tools">
              <div onClick={this.toggleShowdettaglio}>Nascondi dettagli</div>
              <div>Quante sale ci sono? {piano.sala.dettaglioLocali.length}</div>
              <Button icon="plus" onClick={this.aggiungiDettaglioLocale} />
            </div>
            {piano.sala.dettaglioLocali.map((dettaglioLocale, i) => (
              <div key={dettaglioLocale.id} className="dettaglioLocale">
                <div className="mq dettaglioLocaleAttrib">
                  mq:&nbsp;
                  <InputNumber value={dettaglioLocale.mq} onChange={this.onChangeMq(i)} />
                </div>
                <div className="coperti dettaglioLocaleAttrib">
                  coperti:&nbsp;
                  <InputNumber value={dettaglioLocale.coperti} onChange={this.onChangeCoperti(i)} />
                </div>
                <Button icon="delete" onClick={this.eliminaDettaglioLocale(i)} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
