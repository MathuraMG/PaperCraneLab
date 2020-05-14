import React, { Component } from 'react';
import OnlineClass from './OnlineClass';
import { ONLINE_LIST } from '../../constants/onlineList.js';

require('./onlineClass.scss');

class OnlineClasses extends Component {
  render() {
    return (
      <section className="container container-col" id="online">
        <h1 className="heading online-classes__heading"> Online Class </h1>
        <iframe
          className="online-classes__video"
          width="560" height="315" src="https://www.youtube.com/embed/-w0m634Ny_4?&rel=0&autoplay=1" frameborder="0"  allowfullscreen></iframe>
        <ul className="online-classes__list">
          {ONLINE_LIST.map((item, key) =>
            <li className="online-classes__list-item">
              <OnlineClass
                id={key}
                name={item.Name}
                date={item.Date}
                time={item.Time}
                image={item.Image}
                link={item.Link}
                cost={item.Cost}
                classDetails={item.Details}
              />
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default OnlineClasses;
