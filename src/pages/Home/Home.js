import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Cover from '../../components/Cover/Cover';
import Nav from '../../components/Nav/Nav';
import Calendar from '../../components/Calendar/Calendar';
import About from '../../components/About/About';
import OnlineClasses from '../../components/Online/OnlineClasses';
import Contact from '../../components/Contact/Contact';
import Tutorial from '../../components/Tutorial/Tutorial';

require('./home.scss');

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Cover />
        <About />
        <OnlineClasses />
        <Tutorial />
        <Contact />
        <footer class="footer">
          <Link to="/tos">Terms of Service</Link>
          <Link to="/refund">Cancellation and Refund</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </footer>
      </div>
    );
  }
}


export default Home;
