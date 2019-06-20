import PropTypes from 'prop-types';
import React, { Component } from 'react';

require('./about.scss');

class About extends Component {
  render() {
    return (
      <section className="container container-col">
        <div className="sub-container">
        </div>

        <div className="sub-container">
          <h1 className="heading"> About Us </h1>
          <p className="content">
          Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack like a vicious monster for make muffins, so i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
