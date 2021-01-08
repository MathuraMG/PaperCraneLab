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
import ScrollUpSVG from '../../assets/scroll_up.svg';

require('./home.scss');

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Cover />
        <Events/>
        <OnlineClasses />
        <Testimonial />
        <About />
        <Team />
        <Contact />
        <footer className="footer">
          <Link to="/tos">Terms of Service</Link>
          <Link to="/refund">Cancellation and Refund</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </footer>
        <ScrollToTop showUnder={160}>
          <ScrollUpSVG alt="email" />
        </ScrollToTop>
      </div>
    );
  }
}


export default Home;
//
// <Nav />
// <Cover />
// <About />
// <OnlineClasses />
// <Team />
// <Contact />
// <footer class="footer">
//   <Link to="/tos">Terms of Service</Link>
//   <Link to="/refund">Cancellation and Refund</Link>
//   <Link to="/privacy">Privacy Policy</Link>
// </footer>
