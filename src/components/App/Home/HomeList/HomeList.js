import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

import { image1, image2, image3, image4, image5 } from './images';

import './HomeList.css';

const { Meta } = Card;
export default class HomeList extends Component {
  ItemContet = (image, desc = { title: 'titolo', content: 'descrizione' }) => (
    <div className="itemContent">
      <div className="bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="description">
        <h3>{desc.title}</h3>
        <p>{desc.content}</p>
      </div>
    </div>
  );

  render() {
    return (
      <div className="HomeList">
        <div className="title">
          <h2>I consigli di ChefEstate</h2>
        </div>
        <Row type="flex">
          <Col className="itemList" xs={24} md={24}>
            {this.ItemContet(image1)}
          </Col>
          <Col className="itemList" xs={24} md={8}>
            {this.ItemContet(image2)}
          </Col>
          <Col className="itemList" xs={24} md={16}>
            {this.ItemContet(image3)}
          </Col>
          <Col className="itemList" xs={24} md={16}>
            {this.ItemContet(image4)}
          </Col>
          <Col className="itemList" xs={24} md={8}>
            {this.ItemContet(image5)}
          </Col>
        </Row>
      </div>
    );
  }
}
