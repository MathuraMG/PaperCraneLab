import React, { Component } from 'react';
import { ONLINE_LIST } from '../../constants/onlineList.js';

require('./team.scss');

class Team extends Component {
  render() {
    return (
      <section className="container container-col" id="team">
        <h1 className="heading team__heading"> Our Team </h1>
        <h2 className="sub-heading team__heading"> Meet the vibrant group that forms PCL! </h2>

        <ul className="team__list">
          <li className="team__list-item">
            <h3 className="team__name"> Mathura, Founder </h3>
            <img className="team__image"
            src="http://placekitten.com/400/400"
            />
            <p className="team__bio"> Dolan is a cat. He likes food, and sleep.
            When he is not eating or sleeping, he is under a ladder. His best friend is
            a human. He hates the other cat he is forced to live with - Pico.</p>
          </li>
          <li className="team__list-item">
            <h3 className="team__name"> MVG, Biz Consultant </h3>
            <img className="team__image"
            src="http://placekitten.com/400/400"
            />
            <p className="team__bio"> Dolan is a cat. He likes food, and sleep.
            When he is not eating or sleeping, he is under a ladder. His best friend is
            a human. He hates the other cat he is forced to live with - Pico.</p>
          </li>
          <li className="team__list-item">
            <h3 className="team__name"> TJ, Facilitator </h3>
            <img className="team__image"
            src="http://placekitten.com/400/400"
            />
            <p className="team__bio"> Dolan is a cat. He likes food, and sleep.
            When he is not eating or sleeping, he is under a ladder. His best friend is
            a human. He hates the other cat he is forced to live with - Pico.</p>
          </li>
          <li className="team__list-item">
            <h3 className="team__name"> Dhanvini, Facilitator </h3>
            <img className="team__image"
            src="http://placekitten.com/400/400"
            />
            <p className="team__bio"> Dolan is a cat. He likes food, and sleep.
            When he is not eating or sleeping, he is under a ladder. His best friend is
            a human. He hates the other cat he is forced to live with - Pico.</p>
          </li>
          <li className="team__list-item">
            <h3 className="team__name"> Rushali, Facilitator </h3>
            <img className="team__image"
            src="http://placekitten.com/400/400"
            />
            <p className="team__bio"> Dolan is a cat. He likes food, and sleep.
            When he is not eating or sleeping, he is under a ladder. His best friend is
            a human. He hates the other cat he is forced to live with - Pico.</p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Team;
