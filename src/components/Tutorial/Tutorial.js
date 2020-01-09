import React, { Component } from 'react';
import Dayz from 'dayz';
import moment from 'moment';
import { DATE, EVENTS, HIGHLIGHT_EVENT } from '../../constants/eventList';
import RightButtonSVG from '../../assets/right.svg';
import LeftButtonSVG from '../../assets/left.svg';

require('dayz/dayz.scss');
require('./tutorial.scss');

class Tutorial extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }



  render() {
    return (
      <section className="container" id="events">
        <section className="sub-container tutorial__container-col tutorial__container-small">
          <h1 className="heading tutorial__heading"> Check out our latest tutorial </h1>
          <p className="tutorial_sub-container content">
          Light up your holidays, birthdays and events with a DIY light-up  card. This parent-child activity works in two folds. First, it brings out the creative best in your kids as they make their own Christmas cards and second, it is a fun way to teach your kids the application of Science, Technology, Engineering and Art (STEM)! The activity will also demonstrate one of the quickest and most engaging ways to teach kids the basics of electronics through paper circuits.
          </p>
          <a class="tutorial__link" target="_blank" href="https://buzzingbubs.com/articles/diy-light-up-christmas-cards?src=ha">
          Click here to read the full tutorial
          </a>
        </section>
        <section className="sub-container tutorial__container tutorial__container-big">
          <iframe className="tutorial__video" title="vimeo-player" src="https://player.vimeo.com/video/380027496" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </section>
      </section>
    );
  }
}

export default Tutorial;
