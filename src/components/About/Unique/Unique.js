import PropTypes from 'prop-types';
import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { UNIQUELIST } from '../../../constants/offeringList.js';

require('./unique.scss');

class Unique extends Component {
  renderListItem=content => (
    <li
      className="unique__list-item"
    >
      <p className="content">
        {renderHTML(content)}
      </p>
    </li>
  )

  render() {
    return (
      <section className="unique__container">
        <h1 className="heading unique__heading">
          What makes us unique
        </h1>
        <ul className="unique__list">
          {UNIQUELIST.map((list, i) => this.renderListItem(UNIQUELIST[i]))}
        </ul>
      </section>
    );
  }
}

export default Unique;

/*
- our passion to involve everyone and to get them engaged and excited by technical tools and use them in ways previously not thought common
- our trainers have deep knowledge in training classes all over the world and know how to introduce a new skill within individual constraints
- we offer wide variety of courses, tailored to specific needs of organisations, individuals and children.

*/
