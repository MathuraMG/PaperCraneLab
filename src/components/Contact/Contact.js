import React, { Component } from 'react';
import Testimonials from './Testimonials';

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
            Contact Us
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
            <textarea
              className="contact__input contact__para"
              type="text"
              placeholder="Let us know if you have any questions"
              name="entry.818097734"
            >

            </textarea>
            <input
              className="button contact__button"
              type="submit"
              value="Submit"
            />
          </form>
          {
            this.state.submitted && (
              <p className="contact__thankyou">
              Thank you for contacting us! We will get back to you soon.
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
      </section>
    );
  }
}

export default Contact;

/*

https://docs.google.com/forms/d/e/1FAIpQLSc6z-fTUefCDHIsLeiYcYCGV_hfr8LEgNRAN4lo-fF1FoJl9g/viewform?usp=pp_url&entry.886381642=test@test&entry.818097734=testest

*/
