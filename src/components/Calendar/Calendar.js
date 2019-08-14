import React, { Component } from 'react';
import Dayz from 'dayz';
import moment from 'moment';
import { DATE, EVENTS, HIGHLIGHT_EVENT } from '../../constants/eventList';
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
      displayLocation: 'Home',
      displayAudience: 'Cats',
      goLeft: false
    };
  }

  componentDidMount() {
    document.querySelector('.evbody div').classList.add('day-selected');
    this.setState({
      displayHeading: HIGHLIGHT_EVENT.content,
      displayContent: HIGHLIGHT_EVENT.details,
      displayTiming: HIGHLIGHT_EVENT.timing,
      displayImage: HIGHLIGHT_EVENT.image,
      displayLink: HIGHLIGHT_EVENT.link,
      displayLocation: HIGHLIGHT_EVENT.location,
      displayAudience: HIGHLIGHT_EVENT.audience,
    });
  }

  decreaseMonth = () => {
    const currentMonth = moment().month();
    const currentYear = moment().year();

    const dateDisplayed = this.state.dateDisplayed.clone();
    dateDisplayed.subtract(1, 'months');

    const dateDisplayedMonth = dateDisplayed.month();
    const dateDisplayedYear = dateDisplayed.year();

    if (
      currentYear < dateDisplayedYear ||
      (currentYear === dateDisplayedYear &&
      currentMonth <= dateDisplayedMonth)
    ) {
      this.setState({
        dateDisplayed
      });
    } else {
      this.setState({
        goLeft: false
      });
    }
  }

  increaseMonth = () => {
    const dateDisplayed = this.state.dateDisplayed.clone(); //eslint-disable-line
    dateDisplayed.add(1, 'months');
    this.setState({
      dateDisplayed,
      goLeft: true
    });
  }

  setDisplayEvent = (heading, content, timing, image, link, location, audience) => {
    this.setState({
      displayHeading: heading,
      displayTiming: timing,
      displayContent: content,
      displayImage: image,
      displayLink: link,
      displayLocation: location,
      displayAudience: audience
    });
  }

  onEventClick = (e, layout) => {
    const elts = document.getElementsByClassName('day-selected');
    for (let i = 0; i < elts.length; i += 1) {
      elts[i].classList.remove('day-selected');
    }
    e.target.className = `${e.target.className}day-selected`;
    const { content, details, timing, image, link, location, audience } = layout.attributes;
    this.setDisplayEvent(content, details, timing, image, link, location, audience);
  }

  render() {
    return (
      <section className="container" id="events">
        <section className="sub-container calendar__container-col calendar__container-small">
          <h1 className="heading calendar__heading"> Upcoming Events </h1>
          <div className="calendar__details">
            <button
              className="calendar__change-month"
              onClick={this.decreaseMonth}
            >
              <LeftButtonSVG
                className={`calendar__change-month-button
              ${this.state.goLeft ? '' : 'calendar__change-month-button-static'}`}
              />
            </button>
            <p className="calendar__month">
              {this.state.dateDisplayed.format('MMM YYYY')}
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
            display="month"
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
              alt="event poster"
            />
            {this.state.displayLink && (
              <a
                className="button"
                href={this.state.displayLink}
                target="_blank"
                rel="noopener noreferrer"
              >
              Book Now!
              </a>
            )}
          </div>
          <div className="calendar__sub-container calendar__sub-container-left">
            <div>
              <h1 className="heading">
                {' '}
                {this.state.displayHeading}
              </h1>
              <h2 className="sub-heading calendar__sub-heading">
                {this.state.displayTiming}
              </h2>
              <h2 className="sub-heading calendar__sub-heading-1">
                {this.state.displayLocation}
              </h2>
              <h2 className="sub-heading calendar__sub-heading-1">
                {this.state.displayAudience}
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
