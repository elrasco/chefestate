import React, { Component } from 'react';
import './Essential2.css';
export default class Essential2 extends Component {
  render() {
    return <i className={`Essential2 icon-essential-${this.props.type}-${this.props.name}`} />;
  }
}
