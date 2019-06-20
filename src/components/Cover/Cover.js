import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cover from '../../assets/cover.png'

require('./cover.scss');

class Cover extends Component {
  render() {
    return (
      <div className="cover__container">
        <img className="cover__image" src={cover} alt="top view illustration of a work table"/>
      </div>
    );
  }
}

export default Cover;
