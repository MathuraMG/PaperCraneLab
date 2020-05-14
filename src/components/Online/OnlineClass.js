import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CustomModal from './Modal/Modal.js';

require('./onlineClass.scss');

class OnlineClass extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <section className="online-class__container" id="offerings">
      <CustomModal
        isModalOpen={this.state.isModalOpen}
        closeModal={this.closeModal}
        openModal={this.openModal}
        name={this.props.name}
        time={this.props.time}
        date={this.props.date}
        image={this.props.image}
        link={this.props.link}
        cost={this.props.cost}
        classDetails={this.props.classDetails}
      >

      </CustomModal>
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
      <button
        className="online-class__more"
        onClick={this.openModal}
      >
        Learn More
      </button>
      <a
        className="button"
        target="_blank"
        href={this.props.link}
        rel="im-checkout"
        onClick={this.openModal}
        data-text="Register Now"
      >
        Register Now
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
