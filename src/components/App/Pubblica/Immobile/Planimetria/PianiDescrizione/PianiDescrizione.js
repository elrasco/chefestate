import React, { Component } from 'react';

import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select } from 'antd';

import PianoDescrizione from '../PianoDescrizione';
import './PianiDescrizione.css';

export default class PianiDescrizione extends Component {
  constructor(props) {
    super(props);
    this.state = { Piani: [] };
  }

  componentDidMount() {
    this.addPiano();
  }

  onChangePiano = Piano => value => {
    let Piani = this.state.Piani;
    let pianoIndex = Piani.findIndex(piano => piano.id === Piano.id);
    Piani[pianoIndex] = value;
    this.setState({ Piani });
  };

  addPiano = () => {
    let Piani = this.state.Piani;
    let id = `piano_${new Date().getTime()}`;
    Piani.push({ id, value: {} });
    this.setState({ Piani });
  };

  eliminaPiano = piano => () => {
    let Piani = this.state.Piani;
    Piani.splice(piano, 1);
    this.setState({ Piani });
  };

  render() {
    return (
      <div className="PianiDescrizione">
        <div className="piani">
          <div>Quanti piani ci sono?</div>
          <div>{this.state.Piani.length}</div>
          <Button icon="plus" onClick={this.addPiano} />
        </div>

        <h3>Descrivici tutti gli spazi in ogni piano</h3>
        {this.state.Piani.map((Piano, i) => (
          <div key={i} className="piano-descrizione-item">
            <PianoDescrizione id={Piano.id} value={Piano} onChange={this.onChangePiano(Piano)} />
            <Button icon="close" shape="circle" onClick={this.eliminaPiano(i)} />
          </div>
        ))}
      </div>
    );
  }
}
