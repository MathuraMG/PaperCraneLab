import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";

import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Cover from '../../components/Cover/Cover';
import Events from '../../components/Events/Events';
import Nav from '../../components/Nav/Nav';
import OnlineClasses from '../../components/Online/OnlineClasses';
import Team from '../../components/Team/Team';
import Testimonial from '../../components/Testimonial/Testimonials';
import Tutorial from '../../components/Tutorial/Tutorial';
import Work from '../../components/Work/Work';
import Youtube from '../../components/Youtube/Youtube';

import ScrollUpSVG from '../../assets/scroll_up.svg';

require('./home.scss');

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Cover />
        <About />
        <Youtube />
        <Work />
        <Team />
        <Contact />

        <ScrollToTop showUnder={160}>
          <ScrollUpSVG alt="scroll to top" />
        </ScrollToTop>
      </div>
    );
  }
}


export default Home;
