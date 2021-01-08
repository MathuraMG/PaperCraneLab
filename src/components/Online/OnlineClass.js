import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CustomModal from './Modal/Modal.js';
import renderHTML from 'react-render-html';

require('./onlineClass.scss');

class OnlineClass extends Component {

  render() {

    return (
      <div>

        <section className="online-class__container" id="classes" id={`online-class-${this.props.id}`}>
        <a
          className="online-class__more"
          target="_blank"
          href={this.props.link}
        >
          <div className="online-class__image-wrap">
            <img className="online-class__image" src={this.props.image} />
          </div>
          <h2 className="online-class__heading" >
            {this.props.name}
          </h2>
          <div class="online-class__subcontainer">
            <h2 className="online-class__heading-cost" >
            {renderHTML(this.props.cost)}
            </h2>
            <a
              className="button im-checkout-btn"
              target="_blank"
              href={this.props.link}
            >
            {this.props.buttonText}
            </a>
          </div>
        </a>

        </section>
      </div>
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
