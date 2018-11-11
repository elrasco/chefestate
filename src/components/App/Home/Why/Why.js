import React, { Component } from 'react';

import { Icon, Button } from 'antd';

import { image1 } from './img';
import './Why.css';
export default class Why extends Component {
  render() {
    return (
      <div className="Why">
        <div className="bg" style={{ backgroundImage: `url(${image1})` }}>
          <h2>Perchè scegliere Magnini??</h2>
          <div className="features">
            <div className="feature">
              <Icon type="crown" theme="outlined" />
              <p>Figo</p>
            </div>
            <div className="feature">
              <Icon type="safety" theme="outlined" />
              <p>Sicuro</p>
            </div>
            <div className="feature">
              <Icon type="thunderbolt" theme="outlined" />
              <p>Efficace</p>
            </div>
            <div className="feature">
              <Icon type="rocket" theme="outlined" />
              <p>Gay</p>
            </div>
          </div>
          <div>
            <Button type="primary">Pubblica il tuo ristorante</Button>
          </div>
        </div>
      </div>
    );
  }
}
