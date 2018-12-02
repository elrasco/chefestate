import React, { Component } from 'react';
import { Collapse, Form, Checkbox, InputNumber, Row, Col, Select } from 'antd';

import './PianoDescrizione.css';
import { inject, observer } from 'mobx-react';

import { Sale, Toilette, Terrazza, Magazzino, ToiletteDip, Spogliatoio, LocaleTecnico, Cucina, Cantina, Ufficio } from './Locali';

const Panel = Collapse.Panel;

@inject('pubblicaStore')
@observer
export default class PianoDescrizione extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showdettagliosala: false,
      showdettagliotoilette: false,
      showdettaglioterrazza: false,
      showdettagliomagazzino: false,
      showdettagliotoiletteDip: false,
      showdettagliospogliatoio: false,
      showdettagliolocaletecnico: false,
      showdettagliocucina: false,
      showdettagliocantina: false,
      showdettaglioufficio: false
    };
  }

  onChangePiano = piano => {
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, { piano }));
  };

  onChangeMq = mq => {
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, { mq }));
  };

  onChangeCoperti = coperti => {
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, { coperti }));
  };

  onChangeLocalePresente = locale => e => {
    const presenteObj = Object.assign({}, this.props.piano[locale], { presente: e.target.checked });
    const obj = {};
    obj[locale] = presenteObj;
    this.props.pubblicaStore.updatePiano(Object.assign({}, this.props.piano, obj));
  };

  toggleStateVar = stateVar => () => {
    const obj = {};
    obj[stateVar] = !this.state[stateVar];
    this.setState(obj);
  };

  ToggleDettaglio = dettaglio => (
    <div onClick={this.toggleStateVar(`showdettaglio${dettaglio}`)}>{!this.state[`showdettaglio${dettaglio}`] ? 'Mostra' : 'Nascondi'} dettagli</div>
  );

  render() {
    const { piano, pubblicaStore } = this.props;
    return (
      <Row className="PianoDescrizione" id={this.props.id}>
        <Row>
          <Col sm={4} className="field">
            <Form.Item label="Piano" className="piano" colon={false}>
              <Select placeholder="Seleziona il piano" value={piano.piano} onChange={this.onChangePiano}>
                <Select.Option key={0} value="1">
                  Interrato
                </Select.Option>
                <Select.Option key={1} value="2">
                  Terra
                </Select.Option>
                <Select.Option key={2} value="3">
                  Primo
                </Select.Option>
                <Select.Option key={3} value="4">
                  Secondo
                </Select.Option>
                <Select.Option key={4} value="5">
                  Terzo
                </Select.Option>
                <Select.Option key={5} value="6">
                  Maggiore del terzo
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={2} className="field" style={{ width: '120px' }}>
            <Form.Item label="mq" className="superficie" colon={false}>
              <InputNumber name="mq" value={piano.mq} onChange={this.onChangeMq} />
            </Form.Item>
          </Col>
          <Col sm={2} className="field" style={{ width: '120px' }}>
            <Form.Item label="coperti" className="coperti" colon={false}>
              <InputNumber name="coperti" value={piano.coperti} onChange={this.onChangeCoperti} />
            </Form.Item>
          </Col>
        </Row>
        <div>Descrivi i locali</div>
        <div className="dettagli">
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.sala.presente} onChange={this.onChangeLocalePresente('sala')}>
                Sala
              </Checkbox>
              {piano.sala.presente && this.ToggleDettaglio('sala')}
            </div>
            {piano.sala.presente && <Sale piano={this.props.piano} showdettaglio={this.state.showdettagliosala} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.toilette.presente} onChange={this.onChangeLocalePresente('toilette')}>
                WC
              </Checkbox>
              {piano.toilette.presente && this.ToggleDettaglio('toilette')}
            </div>
            {piano.toilette.presente && <Toilette piano={this.props.piano} showdettaglio={this.state.showdettagliotoilette} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.terrazza.presente} onChange={this.onChangeLocalePresente('terrazza')}>
                Terrazza
              </Checkbox>
              {piano.terrazza.presente && this.ToggleDettaglio('terrazza')}
            </div>
            {piano.terrazza.presente && <Terrazza piano={this.props.piano} showdettaglio={this.state.showdettaglioterrazza} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.magazzino.presente} onChange={this.onChangeLocalePresente('magazzino')}>
                magazzino
              </Checkbox>
              {piano.magazzino.presente && this.ToggleDettaglio('magazzino')}
            </div>
            {piano.magazzino.presente && <Magazzino piano={this.props.piano} showdettaglio={this.state.showdettagliomagazzino} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.toiletteDip.presente} onChange={this.onChangeLocalePresente('toiletteDip')}>
                WC Dipendenti
              </Checkbox>
              {piano.toiletteDip.presente && this.ToggleDettaglio('toiletteDip')}
            </div>
            {piano.toiletteDip.presente && <ToiletteDip piano={this.props.piano} showdettaglio={this.state.showdettagliotoiletteDip} />}
          </div>
        </div>
        <div className="dettagli">
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.cucina.presente} onChange={this.onChangeLocalePresente('cucina')}>
                Cucina
              </Checkbox>
              {piano.cucina.presente && this.ToggleDettaglio('cucina')}
            </div>
            {piano.cucina.presente && <Cucina piano={this.props.piano} showdettaglio={this.state.showdettagliocucina} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.localetecnico.presente} onChange={this.onChangeLocalePresente('localetecnico')}>
                Locale Tecnico
              </Checkbox>
              {piano.localetecnico.presente && this.ToggleDettaglio('localetecnico')}
            </div>
            {piano.localetecnico.presente && <LocaleTecnico piano={this.props.piano} showdettaglio={this.state.showdettagliolocaletecnico} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.cantina.presente} onChange={this.onChangeLocalePresente('cantina')}>
                Cantina
              </Checkbox>
              {piano.cantina.presente && this.ToggleDettaglio('cantina')}
            </div>
            {piano.cantina.presente && <Cantina piano={this.props.piano} showdettaglio={this.state.showdettagliocantina} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.ufficio.presente} onChange={this.onChangeLocalePresente('ufficio')}>
                ufficio
              </Checkbox>
              {piano.ufficio.presente && this.ToggleDettaglio('ufficio')}
            </div>
            {piano.ufficio.presente && <Ufficio piano={this.props.piano} showdettaglio={this.state.showdettaglioufficio} />}
          </div>
          <div className="locale">
            <div className="header">
              <Checkbox checked={piano.spogliatoio.presente} onChange={this.onChangeLocalePresente('spogliatoio')}>
                Spogliatoio
              </Checkbox>
              {piano.spogliatoio.presente && this.ToggleDettaglio('spogliatoio')}
            </div>
            {piano.spogliatoio.presente && <ToiletteDip piano={this.props.piano} showdettaglio={this.state.showdettagliospogliatoio} />}
          </div>
        </div>
      </Row>
    );
  }
}
