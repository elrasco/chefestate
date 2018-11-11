import React, { Component } from 'react';

import './CarPartIcon.css';

export default class CarPartIcon extends Component {
  getType = type => type;
  render() {
    return <i className={`CarPartIcon icon-carparts-${this.getType(this.props.type)}`} style={{ ...this.props.style }} />;
  }
}

//https://www.flaticon.com/packs/car-parts-2
