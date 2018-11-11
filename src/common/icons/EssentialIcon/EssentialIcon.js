import React, { Component } from 'react';

import './EssentialIcon.css';

const statusClassMapper = status => {
  switch (status) {
    case 'notified':
      return 'megaphone';
    case 'sent':
      return 'paper-plane';
    case 'action':
      return 'calendar-2';
    case 'booked':
      return 'calendar-1';
    case 'discarded':
      return 'garbage-1';
    case 'suspended':
      return 'pause-1';
    default:
      return status;
  }
};

const fillOrLineal = props => (props.hasOwnProperty('fill') ? 'fill' : 'lineal');

export default class EssentialIcon extends Component {
  render = () => (
    <i
      className={`EssentialIcon flaticon flaticon-${fillOrLineal(this.props)}-${statusClassMapper(this.props.type)} ${this.props.className || ''} ${
        this.props.highlight ? 'highlight' : ''
      }`}
      onClick={this.props.onClick}
      style={this.props.style}
    />
  );
}
