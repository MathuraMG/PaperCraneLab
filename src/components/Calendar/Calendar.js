import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dayz from 'dayz';
// could also import the sass if you have a loader at dayz/dayz.scss
// import 'dayz/dist/styles.css';
import moment from 'moment';
import Container from '@material-ui/core/Container';

require('dayz/dayz.scss');
require('./calendar.scss');

// would come from a network request in a "real" app
const date = moment('2015-09-11');
const EVENTS = new Dayz.EventsCollection([
    { content: 'A short event',
      range: moment.range( date.clone(),
                           date.clone().add(1, 'day') ) },
    { content: 'Two Hours ~ 8-10',
      range: moment.range( date.clone().hour(8),
                           date.clone().hour(10) ) },
    { content: "A Longer Event",
      range: moment.range( date.clone().subtract(2,'days'),
                           date.clone().add(8,'days') ) }
]);


class Calendar extends Component {
  render() {
    return (
      <section className="container">
        <div className="sub-container">
          <h1 className="heading"> Upcoming Events </h1>
          <p className="content">
          Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack like a vicious monster for make muffins, so i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck.
          </p>
        </div>
        <div className="sub-container">
          <Dayz
            display='month'
            date={date}
            events={EVENTS}
          />
        </div>
      </section>
    );
  }
}

export default Calendar;
