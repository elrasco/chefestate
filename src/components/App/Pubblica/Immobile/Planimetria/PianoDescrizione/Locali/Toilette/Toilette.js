import React, { Component } from 'react';
import { InputNumber, Button, Checkbox } from 'antd';
import './Toilette.css';
import { inject, observer } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class Toilette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showdettaglio: false
    };
    this.tipo = 'toilette';
  }

  toggleShowdettaglio = () => {
    this.setState({ showdettaglio: !this.state.showdettaglio });
  };

  aggiungiDettaglioLocale = () => {
    this.props.pubblicaStore.addDettaglioLocale(this.props.piano.id, this.tipo, { mf: false, disabili: false });
  };

  eliminaDettaglioLocale = i => () => {
    this.props.pubblicaStore.eliminaDettaglioLocale(this.props.piano.id, this.tipo, i);
  };

  updateDettaglioLocale = (i, attrName) => e => {
    this.props.piano[this.tipo].dettaglioLocali[i][attrName] = e.target.checked;
    this.props.pubblicaStore.updateDettaglioLocale(this.props.piano.id, this.tipo, this.props.piano[this.tipo].dettaglioLocali);
  };
  render() {
    const { piano } = this.props;
    return (
      <div className="Toilette">
        {this.props.showdettaglio === true && (
          <div className="dettaglio">
            <div className="tools">
              <div>Quante sale ci sono? {piano[this.tipo].dettaglioLocali.length}</div>
              <Button icon="plus" onClick={this.aggiungiDettaglioLocale} />
            </div>
            {piano[this.tipo].dettaglioLocali.map((dettaglioLocale, i) => (
              <div key={dettaglioLocale.id} className="dettaglioLocale">
                <div className="dettaglioLocaleAttrib">
                  m/f:&nbsp;
                  <Checkbox checked={dettaglioLocale.mf} onChange={this.updateDettaglioLocale(i, 'mf')} />
                </div>
                <div className="dettaglioLocaleAttrib">
                  disabili:&nbsp;
                  <Checkbox checked={dettaglioLocale.disabili} onChange={this.updateDettaglioLocale(i, 'disabili')} />
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
