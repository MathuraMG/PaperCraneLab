import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CustomModal from './Modal/Modal.js';

require('./onlineClass.scss');

class OnlineClass extends Component {

  render() {
    return (
      <section className="online-class__container" id="offerings">
      <h2 className="online-class__heading">
        {this.props.name}
      </h2>
      <h2 className="online-class__sub-heading">
        {this.props.date}
      </h2>
      <h2 className="online-class__sub-heading">
        {this.props.time}
      </h2>

      <img className="online-class__image" src={this.props.image} />
      <a
        className="button"
        target="_blank"
        href={this.props.link}
      >
        Join the Class
      </a>
      </section>
    );
  }
}
OnlineClass.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  eventHeading: PropTypes.string.isRequired,
  eventImg: PropTypes.string.isRequired,
};

export default OnlineClass;
