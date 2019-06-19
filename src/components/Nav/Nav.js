import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./nav.scss');

class Nav extends Component {

  render() {
    return (
      <div className="nav__container">
        <div className="nav__left">
          PCL
        </div>
      </div>
    );
  }
}

export default Nav;
