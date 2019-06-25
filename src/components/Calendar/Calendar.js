import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dayz from 'dayz';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import {DATE, EVENTS} from '../../constants/eventList';
import RightButtonSVG from '../../assets/right.svg';
import LeftButtonSVG from '../../assets/left.svg';

require('dayz/dayz.scss');
require('./calendar.scss');

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDisplayed: DATE,
      displayHeading: 'Heading',
      displayTiming: '2pm',
      displayContent: 'Content',
      displayImage: 'image',
      displayLink: 'Learn More',
      goLeft: true
    }
  }

  componentDidMount() {
    document.querySelector('.evbody div').classList.add('day-selected');
    this.setState({
      displayHeading: EVENTS.events[0].attributes.content,
      displayContent: EVENTS.events[0].attributes.details,
      displayTiming: EVENTS.events[0].attributes.timing,
      displayImage: EVENTS.events[0].attributes.image,
      displayLink: EVENTS.events[0].attributes.link
    })
  }

  decreaseMonth = () => {
    let currentMonth  = moment().month();
    let currentYear  = moment().year();

    let dateDisplayed = this.state.dateDisplayed.clone();
    dateDisplayed.subtract(1, 'months');

    let dateDisplayedMonth = dateDisplayed.month();
    let dateDisplayedYear = dateDisplayed.year();

    if(
      currentYear < dateDisplayedYear ||
      (currentYear == dateDisplayedYear &&
      currentMonth <= dateDisplayedMonth)
    ) {
      this.setState({
        dateDisplayed: dateDisplayed
      })
    } else {
      this.setState({
        goLeft: false
      })
    }
  }

  increaseMonth = () => {
    let dateDisplayed = this.state.dateDisplayed.clone();
    dateDisplayed.add(1, 'months');
    this.setState({
      dateDisplayed: dateDisplayed,
      goLeft: true
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
    let elts = document.getElementsByClassName('day-selected');
    for(let i=0; i<elts.length; i++) {
      elts[i].classList.remove('day-selected');
    }
    e.target.className = e.target.className + 'day-selected'
    const {content, details, timing, image, link } = layout.attributes;
    this.setDisplayEvent(content, details, timing, image, link);

  }
  render() {
    return (
      <section className="container" id="events">
        <section className="sub-container calendar__container-col calendar__container-small">
          <h1 className="heading"> Upcoming Events </h1>
          <div className="calendar__details">
            <button
              className="calendar__change-month"
              onClick={this.decreaseMonth}
            >
            <LeftButtonSVG
              className={`calendar__change-month-button
              ${this.state.goLeft?'':'calendar__change-month-button-static'}`}
            />
            </button>
            <p className="calendar__month">
              {this.state.dateDisplayed.format("MMM YYYY")}
            </p>
            <button
              className="calendar__change-month"
              onClick={this.increaseMonth}
            >
              <RightButtonSVG
                className="calendar__change-month-button"
              />
            </button>
          </div>
          <Dayz
            display='month'
            date={this.state.dateDisplayed}
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
            <div>
              <h1 className="heading calendar__heading">  {this.state.displayHeading}
              </h1>
              <h2 className="sub-heading calendar__sub-heading">
              {this.state.displayTiming}
              </h2>
            </div>
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
