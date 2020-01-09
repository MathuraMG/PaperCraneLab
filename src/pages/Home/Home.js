import React, { Component } from 'react';

import Cover from '../../components/Cover/Cover';
import Nav from '../../components/Nav/Nav';
import Calendar from '../../components/Calendar/Calendar';
import About from '../../components/About/About';
import Offerings from '../../components/Offerings/Offerings';
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
        <Tutorial />
        <Offerings />
        <Contact />
      </div>
    );
  }
}


export default Home;
