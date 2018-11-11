import React, { Component } from 'react';
import './DtcIcon.css';
export default class DtcIcon extends Component {
  render() {
    return <div className={`DtcIcon ${this.props.hasOwnProperty('orange') ? 'orange' : ''} ${this.props.hasOwnProperty('red') ? 'red' : ''}`}>DTC</div>;
  }
}
