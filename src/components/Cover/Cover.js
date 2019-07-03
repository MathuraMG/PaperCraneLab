import React, { Component } from 'react';
import cover from '../../assets/cover.png';

require('./cover.scss');

class Cover extends Component {
  render() {
    return (
      <div className="cover__container">
        <img className="cover__image" src={cover} alt="top view illustration of a work table" />
        <div className="cover__heading-container">
          <h1 className="heading cover__heading">
           Innovate, Create & Ideate With Technology
          </h1>
          <h2 className="heading cover__sub-heading">
          A Paper Crane Lab Initiative
          </h2>
        </div>
      </div>
    );
  }
}

export default Cover;
