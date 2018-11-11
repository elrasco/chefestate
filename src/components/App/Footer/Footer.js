import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <span>Copyright © 2018-2020 - magnini.com - Tutti i diritti riservati - </span>
        <a href="#">Avviso legale e Politica sulla privacy</a> - <a href="#">Condizioni di servizio</a>
      </div>
    );
  }
}
