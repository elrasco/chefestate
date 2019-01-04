import React, { Component } from 'react';
import { Card, Form, Input, AutoComplete, Checkbox, Divider, InputNumber, Upload, Icon, Row, Col, Button, Rate } from 'antd';
import './DatiDiBase.css';
import { observer, inject } from 'mobx-react';

@inject('pubblicaStore')
@observer
export default class DatiDiBase extends Component {
  rate = value => {
    this.props.pubblicaStore.annuncio.immobile.rate = value;
  };

  changeCannaFumaria = e => {
    console.log(e, e.target.checked);
    this.props.pubblicaStore.annuncio.immobile.cannaFumaria = e.target.checked;
  };

  changeCucinaCompleta = e => {
    this.props.pubblicaStore.annuncio.immobile.cucinaCompleta = e.target.checked;
  };

  render() {
    const { pubblicaStore } = this.props;
    return (
      <div className="DatiDiBase">
        <Divider orientation="left">Dati di base </Divider>
        <Row>
          <Col sm={8}>
            <Form.Item label="Canna fumaria" className="canna-fumaria" colon={false}>
              <Checkbox checked={pubblicaStore.annuncio.immobile.cannaFumaria} onChange={this.changeCannaFumaria} />
            </Form.Item>
          </Col>

          <Col sm={8}>
            <Form.Item label="Cucina completa" className="cucina" colon={false}>
              <Checkbox checked={pubblicaStore.annuncio.immobile.cucinaCompleta} onChange={this.changeCucinaCompleta} />
            </Form.Item>
          </Col>

          <Col sm={8}>
            <Form.Item label="Stato" className="rate" colon={false}>
              <Rate allowHalf={true} count={3} value={pubblicaStore.annuncio.immobile.rate} onChange={this.rate} />
            </Form.Item>
          </Col>
        </Row>
      </div>
    );
  }
}
