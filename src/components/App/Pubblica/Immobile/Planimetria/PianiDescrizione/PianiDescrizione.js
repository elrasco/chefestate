import React, { Component } from 'react';

import { Collapse, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Select, Modal } from 'antd';

import PianoDescrizione from '../PianoDescrizione';
import SelectDehor from './SelectDehor';
import './PianiDescrizione.css';
import { inject, observer } from 'mobx-react';

const Panel = Collapse.Panel;

@inject('pubblicaStore')
@observer
export default class PianiDescrizione extends Component {
  componentDidMount() {
    /* this.addPiano(); */
  }

  addPiano = e => {
    this.props.pubblicaStore.addPiano();
    e.stopPropagation();
  };

  eliminaPiano = piano => e => {
    this.props.pubblicaStore.eliminaPiano(piano);
    e.stopPropagation();
  };

  headerPanel = i => {
    return (
      <div className="headerPiano">
        <div>Descrivici il piano</div>
        <Button icon="delete" onClick={this.eliminaPiano(i)} />
      </div>
    );
  };

  onChangeDehor = dehor => {
    this.props.onChangeDehor(dehor);
  };

  render() {
    const { piani } = this.props.pubblicaStore.annuncio.immobile.planimetria;
    const { pubblicaStore } = this.props;
    return (
      <div className="PianiDescrizione">
        <div className="domande">
          <div className="piani">
            <div>Quanti piani ci sono?</div>
            <div>{piani.length}</div>
            <Button icon="plus" onClick={this.addPiano} className="more" shape="circle" />
          </div>

          <div className="dehor">
            <SelectDehor />
          </div>
        </div>

        <Collapse className={`${piani.length > 1 ? '' : 'with-border'}`} bordered={false}>
          {piani.map((piano, i) => (
            <Panel key={i} header={this.headerPanel(i)} style={{ background: '#f9f9f9', marginBottom: '12px', borderRadius: 4, border: '0' }}>
              <PianoDescrizione id={piano.id} piano={piano} />
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}
