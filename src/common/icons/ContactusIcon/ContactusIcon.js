import React, { Component } from 'react';
import './ContactusIcon.css';
const getType = type => {
  switch (type) {
    case 'email':
      return 'email-1';
    case 'sms':
      return 'chat-1';
    default:
      return type;
  }
};
export default class ContactusIcon extends Component {
  render = () => (
    <i
      className={`flaticon-contactus-${getType(this.props.type)} ${this.props.className || ''} ${this.props.highlight ? 'highlight' : ''}`}
      onClick={this.props.onClick}
      style={this.props.style}
    />
  );
}
