import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./unique.scss');

class Unique extends Component {
  render() {
    return (
      <section className="unique__container">
        <h1 className="heading unique__heading">
          What makes us unique
        </h1>
      </section>
    );
  }
}

export default Unique;
