import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Cover from '../../components/Cover/Cover';
import Nav from '../../components/Nav/Nav';
import Calendar from '../../components/Calendar/Calendar';
import About from '../../components/About/About';
import Offerings from '../../components/Offerings/Offerings';
import Contact from '../../components/Contact/Contact';

require('./home.scss');

class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Cover/>
        <Calendar/>
        <About/>
        <Offerings/>
        <Contact/>
      </div>
    );
  }
}

Home.propTypes = {

};


export default Home;
