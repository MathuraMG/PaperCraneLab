import React from 'react';
import Modal from 'react-modal';
import { IoIosClose } from "react-icons/io";

require('./modal.scss');

class CustomModal extends React.Component {

  renderOfferings = (offering) => {
    return(
      <div>
        <h1 className="heading modal-event__heading">
          {offering.Heading}
        </h1>
        <div className="modal-event__container">
          <div className="modal-event__sub-container">
            <img
              className="modal-event__image"
              src={offering.Image}
            />
          </div>
          <div className="modal-event__sub-container">
            <p className="modal-event__content">
              {offering.Content}
            </p>
            <a
              className="button modal-event__link"
              href={offering.ButtonLink}
              target="_blank"
            >
              {offering.ButtonDisplay}
            </a>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let content = this.props.children.props.children
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
            <IoIosClose/>
          </button>
          <section className="modal__container">
            <section className="modal__main">
              <div className="modal__main-sub">
                <img
                  className="modal__main-img"
                  src={content.Image}
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
              {content.Offerings.map((offering)=>
                {
                  return this.renderOfferings(offering)
                })
              }
            </section>
          </section>
        </Modal>
      </div>
    );
  }
}

export default CustomModal;
