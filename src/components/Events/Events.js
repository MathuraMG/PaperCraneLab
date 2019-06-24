import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Event from './Event';
import event1 from '../../assets/event1.png'
import event2 from '../../assets/event2.png'
import event3 from '../../assets/event3.png'

require('./events.scss');

class Events extends Component {
  render() {
    return (
      <section className="container container-col">
        <h1 className="heading events__heading"> What can we do for you </h1>
        <ul className="events__list">
          <li className="events__list-item">
            <Event
              eventHeading="Hobby Workshops and Meetups"
              eventImg={event3}
            />
          </li>
          <li className="events__list-item">
            <Event
              eventHeading="Coorporate Workshops and Team Activities"
              eventImg={event1}
            />
          </li>
          <li className="events__list-item">
            <Event
              eventHeading="School Workshops and Classes"
              eventImg={event2}
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default Events;
