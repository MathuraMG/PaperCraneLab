import React, { Component } from 'react';
require('./cover.scss');

class Cover extends Component {
  render() {
    return (
      <div className="cover__container">
        <img className="cover__image" src="/cover.png" alt="top view illustration of a work table" />
        <div className="cover__heading-container">
          <h1 className="heading cover__heading">
           Innovate, Create & Make !
          </h1>
          <h2 className="heading cover__sub-heading">
          A Paper Crane Lab Adventure
          </h2>
        </div>
      </div>
    );
  }
}

export default Cover;
