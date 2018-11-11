import React, { Component } from 'react';

import Search from './Search';
import HomeList from './HomeList';
import Why from './Why';

import homeImage from './img/outdoor.jpg';
import './Home.css';
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="searcherContainer">
          <div className="homeImage" style={{ backgroundImage: `url(${homeImage})` }} />
          <div className="homeSearcher">
            <h1>Meglio di qualsiasi agenzia</h1>
            <Search />
          </div>
        </div>
        <HomeList />
        <Why />
      </div>
    );
  }
}
