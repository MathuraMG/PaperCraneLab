import React, { Component } from 'react';
import Dayz from 'dayz';
import moment from 'moment';
import { DATE, EVENTS, HIGHLIGHT_EVENT } from '../../constants/eventList';
import RsvpSVG from '../../assets/rsvp.svg';

require('dayz/dayz.scss');
require('./events.scss');

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events : []
    };
  }

  componentWillMount() {
    fetch("https://api.apispreadsheets.com/data/5976/").then(res=>{
    	if (res.status === 200){
    		// SUCCESS
    		res.json().then(data=>{
    			// console.log(data.data);
          this.setState({events: data.data});
          console.log(data.data);
    		}).catch(err => console.log(err))
    	}
    	else{
    		// ERROR
    	}
    })
  }


  render() {
    const events = this.state.events.map((event) => {
      return(
        <li className="event__container" key={event.id}>
          <a className="event__link" target="_blank" href={event.Link}>
            <div className="event__left">
              <h3 className="event__month">{event.Month}</h3>
              <h3 className="event__date">{event.Date}</h3>
            </div>
            <div className="event__right">
              <h2 className="event__name">{event.Name}</h2>
              <p className="event__details">{event.Details}</p>
              <p className="event__price">{event.Price}</p>
            </div>
            </a>
        </li>
      )
    }

  );
    return (
      <section className="container events__container" id="events">
        <h1 className="heading events__heading"> Upcoming Events </h1>
        <ul className="sub-container events__container">
          {events}
        </ul>
      </section>
    );
  }
}

export default Events;
