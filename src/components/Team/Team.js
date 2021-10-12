import React, { Component } from 'react';
import { ONLINE_LIST } from '../../constants/onlineList.js';
import { TEAM } from '../../constants/teamContent';

require('./team.scss');

class Team extends Component {
  render() {
    return (
      <section className="container container-col" id="team">
        <h1 className="heading team__heading"> Our Team </h1>
        <h2 className="sub-heading team__heading"> Meet the vibrant group that forms PCL! </h2>

        <ul className="team__list">
          {TEAM.map(team => {
              return <li className="team__list-item">
                  <h3 className="team__name"> {team.name} </h3>
                  <h4 className="team__role"> {team.role} </h4>
                  <img className="team__image" src={team.img}/>
                <p className="content team__bio"> {team.highlight} {team.details}</p>
              </li>
            }
          )}

        </ul>
      </section>
    );
  }
}

export default Team;
