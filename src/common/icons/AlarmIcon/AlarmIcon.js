import React, { Component } from 'react';

import './AlarmIcon.css';

export default class AlarmIcon extends Component {
  getType = type => {
    switch (type) {
      case 'EXT_BATT_VOLTAGE':
        return 'battery';
      case 'OIL_PRESSURE_WARNING':
        return 'oil-press';
      case 'OIL_LEVEL_WARNING':
        return 'oil';
      case 'WATER_IN_FUEL_INDICATOR':
        return 'water';
      case 'ALTERNATOR_WARNING':
        return 'engine';
      default:
        return type;
    }
  };
  render() {
    return (
      <i className={`AlarmIcon icon-alarms-${this.getType(this.props.type)} ${this.props.className}`} style={{ ...this.props.style }}>
        <span className="path1" />
        <span className="path2" />
        <span className="path3" />
      </i>
    );
  }
}
