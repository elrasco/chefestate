import React, { Component } from 'react';
import { InputNumber, Button } from 'antd';
import './Terrazza.css';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Terrazza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showdettaglio: false
    };
    this.tipo = 'terrazza';
  }

  aggiungiDettaglioLocale = () => {
    this.props.pubblicaStore.addDettaglioLocale(this.props.piano.id, this.tipo, { mq: 0, coperti: 0 });
  };

  eliminaDettaglioLocale = i => () => {
    this.props.pubblicaStore.eliminaDettaglioLocale(this.props.piano.id, this.tipo, i);
  };

  updateDettaglioLocale = (i, attrName) => value => {
    this.props.piano[this.tipo].dettaglioLocali[i][attrName] = value;
    this.props.pubblicaStore.updateDettaglioLocale(this.props.piano.id, this.tipo, this.props.piano[this.tipo].dettaglioLocali);
  };

  render() {
    const { piano } = this.props;
    return (
      <div className="Terrazza">
        {this.props.showdettaglio === true && (
          <div className="dettaglio">
            <div className="tools">
              <div>Quante terrazze ci sono? {piano[this.tipo].dettaglioLocali.length}</div>
              <Button icon="plus" onClick={this.aggiungiDettaglioLocale} />
            </div>
            {piano[this.tipo].dettaglioLocali.map((dettaglioLocale, i) => (
              <div key={dettaglioLocale.id} className="dettaglioLocale">
                <div className="dettaglioLocaleAttrib">
                  mq:&nbsp;
                  <InputNumber value={dettaglioLocale.mq} onChange={this.updateDettaglioLocale(i, 'mq')} />
                </div>
                <div className="dettaglioLocaleAttrib">
                  coperti:&nbsp;
                  <InputNumber value={dettaglioLocale.coperti} onChange={this.updateDettaglioLocale(i, 'coperti')} />
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
