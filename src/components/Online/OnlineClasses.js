import React, { Component } from 'react';
import OnlineClass from './OnlineClass';
import { ONLINE_LIST } from '../../constants/onlineList.js';

require('./onlineClass.scss');

class OnlineClasses extends Component {

constructor() {
  super();
  this.state = {
    classes: []
  }
}
  componentWillMount() {
    fetch("https://api.apispreadsheets.com/data/6106/").then(res=>{
      if (res.status === 200){
        // SUCCESS
        res.json().then(data=>{
          // console.log(data.data);
          this.setState({classes: data.data});
          console.log("LOOK HERE" ,data.data);
        }).catch(err => console.log(err))
      }
      else{
        // ERROR
      }
    })
  }

  render() {
    return (
      <section className="container container-col" id="online">
        <h1 className="heading online-classes__heading"> Store </h1>

        <ul className="online-classes__list">
          {this.state.classes.map((item) => {
              if(item.isActive) {
                return(
                  <li className="online-classes__list-item">
                    <OnlineClass
                      id="1"
                      name={item.name}
                      date={item.date}
                      time={item.time}
                      image={item.image}
                      link={item.link}
                      cost={item.cost}
                      buttonText={item.cta}
                    />
                  </li>
                )
              }
            }
          )}
        </ul>
      </section>
    );
  }
}

export default OnlineClasses;
