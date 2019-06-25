import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./offerings.scss');

class Offering extends Component {
  render() {
    return (
      <section className="offering__container" id="offerings">
        <h2 className="offering__heading">
          {this.props.eventHeading}
        </h2>
        <img
          className="offering__image"
          src={this.props.eventImg}
        />
        <button className="button offering__button">
          Learn More
        </button>

      </section>
    );
  }
}

export default Offering;
