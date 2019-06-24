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
    { content: 'Three Hours',
      timing: 'Sept 8 | 2:00pm - 5:00pm',
      range: moment.range( moment('2015-09-08').clone().hour(8),
      moment('2015-09-08').clone().hour(11) ),
      details: 'Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack',
      image: 'https://placekitten.com/200/300',
      link: 'https://placekitten.com/200/300'
    },
    { content: 'Two Hours ~ 8-10',
      timing: 'Sept 11 | 2:00pm - 5:00pm',
      range: moment.range( date.clone().hour(8),
      date.clone().hour(10) ),
      details: 'Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack',
      image: 'http://placecage.com/200/300',
      link: 'http://placecage.com/200/300'
    },
   { content: 'Creative Coding Workshop',
    timing: 'Sept 18 | 2:00pm - 5:00pm',
     range: moment.range( moment('2015-09-18').clone().hour(8),
     moment('2015-09-18').clone().hour(11) ),
     details: 'Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack',
     image: 'http://placebear.com/200/300',
     link: 'http://placebear.com/200/300'
   },
]);


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayHeading: 'Heading',
      displayTiming: '2pm',
      displayContent: 'Content',
      displayImage: 'image',
      displayLink: 'Learn More'
    }
  }

  componentDidMount() {
    this.setState({
      displayHeading: EVENTS.events[0].attributes.content,
      displayContent: EVENTS.events[0].attributes.details,
      displayTiming: EVENTS.events[0].attributes.timing,
      displayImage: EVENTS.events[0].attributes.image,
      displayLink: EVENTS.events[0].attributes.link
    })
  }

  setDisplayEvent = (heading, content, timing, image, link) => {
    this.setState({
      displayHeading: heading,
      displayTiming: timing,
      displayContent: content,
      displayImage: image,
      displayLink: link
    })
  }
  onEventClick = (e, layout) => {
    const {content, details, timing, image, link } = layout.attributes;
    this.setDisplayEvent(content, details, timing, image, link);

  }
  render() {
    return (
      <section className="container">
        <section className="sub-container calendar__container-col calendar__container-small">
          <h1 className="heading"> Upcoming Events </h1>
          <Dayz
            display='month'
            date={date}
            events={EVENTS}
            onEventClick={this.onEventClick}
          />
        </section>
        <section className="sub-container calendar__container calendar__container-big">
          <div className="calendar__sub-container">
            <img
              className="calendar__event-image"
              src={this.state.displayImage}
            />
            <a
              className="button"
              href={this.state.displayLink}
            >
              Tell me more!
            </a>

          </div>
          <div className="calendar__sub-container calendar__sub-container-left">
            <h1 className="heading calendar__heading">  {this.state.displayHeading}
            </h1>
            <h2 className="sub-heading calendar__sub-heading">
            {this.state.displayTiming}
            </h2>
            <p className="content">
            {this.state.displayContent}
            </p>
          </div>
        </section>
      </section>
    );
  }
}

export default Calendar;
