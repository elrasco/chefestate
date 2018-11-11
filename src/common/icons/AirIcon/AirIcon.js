import React, { Component } from 'react';
import './AirIcon.css';
export default class AirIcon extends Component {
  getType = type => type;
  render() {
    return (
      <i className={`AirIcon icon-air-${this.getType(this.props.type)}`} style={{ ...this.props.style }}>
        <span className="path1" />
        <span className="path2" />
        <span className="path3" />
        <span className="path4" />
        <span className="path5" />
        <span className="path6" />
        <span className="path7" />
      </i>
    );
  }
}
