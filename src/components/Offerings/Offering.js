import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CustomModal from './Modal/Modal.js'

require('./offerings.scss');

class Offering extends Component {
  constructor() {
    super();
    this.state={
      isModalOpen: false
    }
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }
  render() {
    return (
      <section className="offering__container" id="offerings">
        <CustomModal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          openModal={this.openModal}
        >
          {this.props.children}
        </CustomModal>
        <h2 className="heading offering__heading">
          {this.props.eventHeading}
        </h2>
        <img
          className="offering__image"
          src={this.props.eventImg}
        />
        <button
          className="button offering__button"
          onClick={this.openModal}
        >
          Learn More
        </button>

      </section>
    );
  }
}

export default Offering;
