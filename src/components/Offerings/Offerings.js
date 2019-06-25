import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Offering from './Offering';
import offering1 from '../../assets/event1.png'
import offering2 from '../../assets/event2.png'
import offering3 from '../../assets/event3.png'
import {OFFERINGS} from '../../constants/offeringList.js'

require('./offerings.scss');

class Offerings extends Component {
  render() {
    return (
      <section className="container container-col" id="offerings">
        <h1 className="heading offerings__heading"> What can we do for you </h1>
        <ul className="offerings__list">
          <li className="offerings__list-item">
            <Offering
              eventHeading={OFFERINGS.Hobby.Heading}
              eventImg={OFFERINGS.Hobby.Image}
            >
              <div>
                {OFFERINGS.Hobby}
              </div>
            </Offering>
          </li>
          <li className="offerings__list-item">
            <Offering
              eventHeading={OFFERINGS.Office.Heading}
              eventImg={OFFERINGS.Office.Image}
            >
              <div>
                {OFFERINGS.Office}
              </div>
            </Offering>
          </li>
          <li className="offerings__list-item">
            <Offering
              eventHeading={OFFERINGS.School.Heading}
              eventImg={OFFERINGS.School.Image}
            >
              <div>
                {OFFERINGS.School}
              </div>
            </Offering>
          </li>
        </ul>
      </section>
    );
  }
}

export default Offerings;
