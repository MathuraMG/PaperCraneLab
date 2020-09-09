import React, { Component } from 'react';
import OnlineClass from './OnlineClass';
import { ONLINE_LIST } from '../../constants/onlineList.js';

require('./onlineClass.scss');

class OnlineClasses extends Component {
  render() {
    return (
      <section className="container container-col" id="online">
        <h1 className="heading online-classes__heading"> Offerings </h1>

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
                spayee={item.spayee}
                tag={item.tag}
                type={item.type}
                buttonText={item.ButtonText}
              />
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default OnlineClasses;
