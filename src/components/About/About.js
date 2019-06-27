import React, { Component } from 'react';
import { ABOUT } from '../../constants/aboutContent';

require('./about.scss');

class About extends Component {
  render() {
    return (
      <section className="container" id="about">
        <section className="sub-container">
          <img
            className="about__image"
            src="https://placekitten.com/500/300"
            alt="partcipants from prev workshops"
          />
        </section>

        <section className="sub-container">
          <h1 className="heading"> About Us </h1>
          <p className="content">
            {ABOUT}
          </p>
        </section>
      </section>
    );
  }
}

export default About;
