import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Cover from '../../components/Cover/Cover';
import Nav from '../../components/Nav/Nav';
import Calendar from '../../components/Calendar/Calendar';
import About from '../../components/About/About';
import Events from '../../components/Events/Events';
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
        <Events/>
        <Contact/>
      </div>
    );
  }
}

Home.propTypes = {

};


export default Home;
