import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./events.scss');

class Event extends Component {
  render() {
    return (
      <section className="event__container">
        <h2 className="event__heading">
          {this.props.eventHeading}
        </h2>
        <img
          className="event__image"
          src={this.props.eventImg}
        />
        <button className="button event__button">
          Learn More
        </button>

      </section>
    );
  }
}

export default Event;
