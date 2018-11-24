import React, { Component } from 'react';

import { Collapse, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select, Modal } from 'antd';

import PianoDescrizione from '../PianoDescrizione';
import SelectDehor from './SelectDehor';
import './PianiDescrizione.css';

const Panel = Collapse.Panel;

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

  headerPanel = piano => {
    return (
      <div className="headerPiano">
        <div>Descrivici il piano</div>
        <Button icon="delete" onClick={this.eliminaPiano(piano)} />
      </div>
    );
  };

  onChangeDehor = dehor => {
    this.props.onChangeDehor(dehor);
  };

  render() {
    const { Piani } = this.state;
    return (
      <div className="PianiDescrizione">
        <div className="domande">
          <div className="piani">
            <div>Quanti piani ci sono?</div>
            <div>{this.state.Piani.length}</div>

            <Button icon="plus" onClick={this.addPiano} className="more" shape="circle" />
          </div>

          <div className="dehor">
            <SelectDehor dehor={this.props.dehor} onChange={this.onChangeDehor} />
          </div>
        </div>

        <Collapse className={`${Piani.length > 1 ? '' : 'with-border'}`}>
          {Piani.map((piano, i) => (
            <Panel key={i} header={this.headerPanel(piano)}>
              <PianoDescrizione id={piano.id} value={piano} onChange={this.onChangePiano(piano)} />
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}
