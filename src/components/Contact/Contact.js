import React, { Component } from 'react';
import Testimonials from './Testimonials';
import PhoneSVG from '../../assets/phone.svg';
import MailSVG from '../../assets/mail.svg';
import InstaSVG from '../../assets/insta.svg';
import AddrSVG from '../../assets/addr.svg';

require('./contact.scss');

const GOOGLE_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSc6z-fTUefCDHIsLeiYcYCGV_hfr8LEgNRAN4lo-fF1FoJl9g/formResponse?';
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false
    };
  }

  onLoad=() => {
    if (this.state.submitted) {
      console.log('loaded');
    }
  }

  onSubmit = () => {
    console.log('in here');
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <section className="contact__container">
        <section className="contact__testimonials">
          <Testimonials />
        </section>
        <section className="contact__form-container">
          <h1 className="heading contact__heading">
            Subscribe to our newsletter
          </h1>
          <form
            className={`contact__form ${this.state.submitted ? 'contact__form--hidden' : ''}`}
            name="gform"
            id="gform"
            encType="text/plain"
            action={GOOGLE_FORM}
            target="hidden_iframe"
            onSubmit={this.onSubmit}
          >
            <input
              className="contact__input"
              type="email"
              placeholder="Email"
              name="entry.886381642"
            />
            <input
              className="button contact__button"
              type="submit"
              value="Submit"
            />
          </form>
          {
            this.state.submitted && (
              <p className="contact__thankyou">
              Thank you for subscribing to our newsletter!
              </p>
            )}
          <iframe
            title="hidden iframe"
            name="hidden_iframe"
            id="hidden_iframe"
            className="contact__iframe"
            onLoad={this.onLoad}
          >
          </iframe>
        </section>
        <section className="contact__form-container">
          <h1 className="heading contact__heading">
            Get in Touch!
          </h1>
          <div className="contact__contact-container">
            <div className="contact__sub-container">
              <ul className="contact__items">
                <li className="contact__item">
                  <div className="contact__icon">
                    <PhoneSVG alt="phone no" />
                  </div>
                  <div className="contact__detail">
                    +91-12345 67890
                  </div>
                </li>
                <li className="contact__item">
                  <div className="contact__icon">
                    <MailSVG alt="email" />
                  </div>
                  <div className="contact__detail">
                    hello@papercranelab.com
                  </div>
                </li>
                <li className="contact__item">
                  <div className="contact__icon">
                    <InstaSVG alt="instagram account" />
                  </div>
                  <div className="contact__detail">
                    papercranelab
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact__sub-container">
              <ul className="contact__items">
                <li className="contact__item">
                  <div className="contact__icon">
                    <AddrSVG alt="office address" />
                  </div>
                  <div className="contact__detail">
                    {`Studio name
                    1st Main street, 1st main cross
                    Rajajinagar
                    bangalore 560098`}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Contact;
