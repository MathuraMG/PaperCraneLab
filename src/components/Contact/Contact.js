import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Testimonials from './Testimonials'

require('./contact.scss');

class Contact extends Component {
  constructor() {
    super();
    this.state={
      submitted: false
    }
  }
  onLoad=()=> {
    if(this.state.submitted) {

    }
  }
  onSubmit = () => {
    this.setState({
      submitted: true
    })
  }
  render() {
    return (
      <section className="contact__container">
        <section className="contact__testimonials">
          <Testimonials/>
        </section>
        <section className="contact__form-container">
          <h1 className="heading contact__heading">
            Contact Us
          </h1>
          <form className="contact__form" name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/1FAIpQLSc6z-fTUefCDHIsLeiYcYCGV_hfr8LEgNRAN4lo-fF1FoJl9g/formResponse?" target="hidden_iframe" onSubmit={this.onSubmit}>
            <input
              className="contact__input"
              type="email"
              placeholder="Email"
              name="entry.886381642"/>
            <textarea
              className="contact__input contact__para"
              type="text"
              name="entry.818097734">
              Let us know if you have any questions
            </textarea>
            <input
              className="button contact__button"
              type="submit"
              value="Submit"
            />
          </form>
          <iframe name="hidden_iframe" id="hidden_iframe" className="contact__iframe" onLoad={this.onLoad}>
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
