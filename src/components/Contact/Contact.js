import React, { Component } from 'react';
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
      <section className="container contact__container" id="contact">
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
                  <a
                    href="tel:+919845620061"
                    className="contact__detail"
                  >
                    +91 98456 20061
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
                <li className="contact__item">
                  <div className="contact__icon">
                    <InstaSVG alt="instagram account" />
                  </div>
                  <a
                    href="https://www.instagram.com/papercranelab/"
                    className="contact__detail"
                  >
                    papercranelab
                  </a>
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

/*

<section className="contact__testimonials">
  <Testimonials />
</section>


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

*/
