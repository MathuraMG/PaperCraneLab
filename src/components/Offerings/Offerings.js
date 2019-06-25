import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Offering from './Offering';
import offering1 from '../../assets/event1.png'
import offering2 from '../../assets/event2.png'
import offering3 from '../../assets/event3.png'

require('./offerings.scss');

class Offerings extends Component {
  render() {
    return (
      <section className="container container-col" id="offerings">
        <h1 className="heading offerings__heading"> What can we do for you </h1>
        <ul className="offerings__list">
          <li className="offerings__list-item">
            <Offering
              eventHeading="Hobby Workshops and Meetups"
              eventImg={offering3}
            />
          </li>
          <li className="offerings__list-item">
            <Offering
              eventHeading="Coorporate Workshops and Team Activities"
              eventImg={offering1}
            />
          </li>
          <li className="offerings__list-item">
            <Offering
              eventHeading="School Workshops and Classes"
              eventImg={offering2}
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default Offerings;
