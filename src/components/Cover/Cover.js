import React, { Component } from 'react';
import cover from '../../assets/cover.png';

require('./cover.scss');

class Cover extends Component {
  render() {
    return (
      <div className="cover__container">
        <img className="cover__image" src={cover} alt="top view illustration of a work table" />
        <h1 className="heading cover__heading">
          awesome one liner about Paper Crane Lab that is this long!
        </h1>
      </div>
    );
  }
}

export default Cover;
