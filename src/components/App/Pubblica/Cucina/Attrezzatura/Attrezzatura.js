import React, { Component } from 'react';
import './Attrezzatura.css';
import { Divider, Form, InputNumber, Rate, Input } from 'antd';
import { observer, inject } from 'mobx-react';
import { mergeDeepRight } from 'ramda';

const Col = props => (
  <div>
    <div>{props.label}</div>
    <div>
      <InputNumber value={props.nr} onChange={props.onChangeNr} />
    </div>
    <div>
      <Input value={props.marca} onChange={props.onChangeMarca} />
    </div>
    <div>
      <Input value={props.modello} onChange={props.onChangeModello} />
    </div>
    <div>
      <Input value={props.note} onChange={props.onChangeNote} />
    </div>
  </div>
);

@inject('pubblicaStore', 'commonStore')
@observer
export default class Attrezzatura extends Component {
  Attrezzatura = (name, label) => {
    const { pubblicaStore } = this.props;
    return (
      <Col
        label={label || name}
        nr={pubblicaStore.annuncio.cucina.attrezzatura[name].nr}
        marca={pubblicaStore.annuncio.cucina.attrezzatura[name].marca}
        modello={pubblicaStore.annuncio.cucina.attrezzatura[name].modello}
        note={pubblicaStore.annuncio.cucina.attrezzatura[name].note}
        onChangeNr={this.onChangeCucina(`${name}.nr`)}
        onChangeMarca={this.onChangeCucina(`${name}.marca`)}
        onChangeModello={this.onChangeCucina(`${name}.modello`)}
        onChangeNote={this.onChangeCucina(`${name}.note`)}
      />
    );
  };

  onChangeCucina = field => value => {
    const fields = field.split('.');
    const { pubblicaStore } = this.props;
    let obj = {};
    let v;

    if (value.target) {
      v = value.target.value;
    } else {
      v = value;
    }

    if (fields.length === 1) {
      obj[field] = v;
    }
    if (fields.length === 2) {
      obj[fields[0]] = {};
      obj[fields[0]][fields[1]] = v;
    }
    pubblicaStore.updateCucina(
      Object.assign({}, pubblicaStore.annuncio.cucina, { attrezzatura: mergeDeepRight(pubblicaStore.annuncio.cucina.attrezzatura, obj) })
    );
  };

  render() {
    const { pubblicaStore } = this.props;
    return (
      <div className="Attrezzatura">
        <Divider orientation="left">Attrezzatura</Divider>
        <div className="table">
          <div>
            <div />
            <div>nro</div>
            <div>marca</div>
            <div>modello</div>
            <div>note</div>
          </div>
          {this.Attrezzatura('friggitrice')}
          {this.Attrezzatura('forno')}
          {this.Attrezzatura('induzione')}
          {this.Attrezzatura('fuochi')}
          {this.Attrezzatura('microonde')}
          {this.Attrezzatura('abbattitore')}
          {this.Attrezzatura('frigo', 'cella frigo')}
        </div>

        <div className="wrapper" />
      </div>
    );
  }
}
