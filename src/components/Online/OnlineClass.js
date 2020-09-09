import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CustomModal from './Modal/Modal.js';
import renderHTML from 'react-render-html';

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
      <div>

        <section className="online-class__container" id="offerings" id={`online-class-${this.props.id}`}>


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
              {renderHTML(this.props.cost)}
              </h2>
              <a
                className="button"
                target="_blank"
                href={this.props.link}
                rel="im-checkout"
                onClick={this.openModal}
                data-text="register now"
              >
                {this.props.buttonText}
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
        }



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
