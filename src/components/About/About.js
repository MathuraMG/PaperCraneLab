import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./about.scss');

class About extends Component {
  render() {
    return (
      <section className="container" id="about">
        <section className="sub-container">
          <img
            className="about__image"
            src="https://placekitten.com/500/300"
            />
        </section>

        <section className="sub-container">
          <h1 className="heading"> About Us </h1>
          <p className="content">
          Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack like a vicious monster for make muffins, so i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck.
          </p>
        </section>
      </section>
    );
  }
}

export default About;
