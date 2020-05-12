import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';
import PhoneSVG from '../../../assets/phone.svg';
import MailSVG from '../../../assets/mail.svg';

require('./modal.scss');

class CustomModal extends React.Component {
  renderOfferings = offering => (
    <div key={`offering-${offering}`}>
      <h1 className="heading modal-event__heading">
        {offering.Heading}
      </h1>
      <div className="modal-event__container">
        <div className="modal-event__sub-container">
          <img
            className="modal-event__image"
            src={offering.Image}
            alt="offering poster"
          />
        </div>
        <div className="modal-event__sub-container">
          <p className="modal-event__content">
            {offering.Content}
          </p>
        </div>
      </div>
    </div>
  )

  render() {
    const content = this.props.children.props.children;
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
          <section className="modal__container">
            <section className="modal__main">
              <div className="modal__main-sub">
                <img
                  className="modal__main-img"
                  src={content.Image}
                  alt="offering poster"
                />
              </div>
              <div className="modal__main-sub">
                <h1 className="heading modal__heading">
                  {content.Heading}
                </h1>
                <p className="modal__content">
                  {content.Content}
                </p>
              </div>
            </section>
            <section className="modal__events">
              {content.Offerings.map(offering => this.renderOfferings(offering))
              }
            </section>
            <h2
              className="sub-heading modal__ask-heading"
            >
              Have Questions? Ask Us!
            </h2>
            <ul className="modal__ask">
              <li className="contact__item">
                <div className="contact__icon">
                  <PhoneSVG alt="phone no" />
                </div>
                <a
                  href="tel:+919513222681"
                  className="contact__detail"
                >
                +91 95132 22681
                </a>
              </li>
              <li className="contact__item">
                <div className="contact__icon">
                  <MailSVG alt="email" />
                </div>
                <a
                  href="mailto:hello@papercranelab.com"
                  className="contact__detail"
                >
                hello@papercranelab.com
                </a>
              </li>
            </ul>
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
