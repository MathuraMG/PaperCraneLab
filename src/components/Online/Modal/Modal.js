import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';
import renderHTML from 'react-render-html';
import PhoneSVG from '../../../assets/phone.svg';
import MailSVG from '../../../assets/mail.svg';

require('./modal.scss');
require('../onlineClass.scss');

class CustomModal extends React.Component {

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.isModalOpen}
          onRequestClose={this.props.closeModal}
        >
        <button
          className="modal__close-button"
          onClick={this.props.closeModal}
        >
          x
        </button>
          <section>
            <h2 className="heading">
              {this.props.name}
            </h2>
            <h2 className="sub-heading modal__info">
              {this.props.date} | {this.props.time}
             </h2>
            <h2 className="sub-heading modal__cost">
              {this.props.cost}
             </h2>
             <img className="modal__image" src={this.props.image}/>
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
             <iframe
               className="online-classes__video"
               width="560" height="315" src="https://www.youtube.com/embed/-w0m634Ny_4?&rel=0&autoplay=1" frameborder="0"  allowfullscreen></iframe>
            <p className="content modal__content">
              {renderHTML(this.props.classDetails)}
            </p>
          </section>
        </Modal>
      </div>
    );
  }
}

CustomModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default CustomModal;
