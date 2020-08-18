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
    let id = 'online-class-'+ this.props.key;
    console.log(id)
    return (
      <section className="online-class__container" id="offerings" id={`online-class-${this.props.id}`}>
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
        id={this.props.id}
      >

      </CustomModal>


      <br/>
      {this.props.spayee ||
      <button
        className="online-class__more"
        onClick={this.openModal}
      >
        <img className="online-class__image" src={this.props.image} />
          <h2 className="online-class__heading" >
            {this.props.name} | Saturdays
          </h2>
          <div class="online-class__subcontainer">
            <h2 className="online-class__heading-cost" >
            &#8377; {this.props.cost}
            </h2>
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
          </div>
      </button>
      }

{this.props.spayee &&
      <a
        className="online-class__more"
        target="_blank"
        href={this.props.link}
      >
        <img className="online-class__image" src={this.props.image} />
          <h2 className="online-class__heading" >
            {this.props.name}
          </h2>
          <div class="online-class__subcontainer">
            <h2 className="online-class__heading-cost" >
            &#8377; {this.props.cost}
            </h2>
            <a
              className="button im-checkout-btn"
              target="_blank"
              href={this.props.link}
            >
              Register Now
            </a>
          </div>
      </a>
      }
      
      

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
