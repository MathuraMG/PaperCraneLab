/* eslint-disable */

import Dayz from 'dayz';
import moment from 'moment';

export const DATE = moment('2019-07-01');

export const JULY13 = moment('2019-07-13');
export const JULY20 = moment('2019-07-20');
export const JULY26 = moment('2019-07-26');

import ImgJULY13 from '../assets/events/papercircuits.png';
import ImgJULY20 from '../assets/events/kirigami.png';
import ImgJULY26 from '../assets/events/papercircuits.png';

export const EVENTS = new Dayz.EventsCollection([
  {
    content: 'Paper circuits for Kids',
    timing: 'July 13 | 3:00pm - 5:30pm',
    range: moment.range(JULY13.clone().hour(14),
    JULY13.clone().hour(16)),
    details: 'Instil the spirit of engineering in your children early on. Introduce them to basic engineering tools and excite them to think analytically while working on fun art and creative projects, a technique that is becoming increasingly popular in western education. We have curated a workshop specially for children of the ages 8-14 years to create art using simple technology like circuits.',
    image: ImgJULY13,
    link: '/comingsoon.html',
    location: 'Venue: Dialogues Cafe, JP Nagar',
    audience: 'Age: 8 - 12 yrs'
  },
  // {
  //   content: 'CCSante Online Schowcase',
  //   timing: 'July 26 | 6:00pm - 8:00pm',
  //   range: moment.range(JULY26.clone().hour(8),
  //     JULY26.clone().hour(11)),
  //   details: `Introduction to the world of creative coding – speak to the expert (and other amazing humans)!
  //   Are you confused about what creative coding is? That is great! We would love to introduce you to the world where coding is the most interesting and fun way to create art!
  //   In this event, we introduce you to different people who have imbibed creative coding into their lives in different forms and formats. Some have made a profession out of it while others do it purely as a soothing hobby.`,
  //   image: ImgJULY20,
  //   link: 'https://placekitten.com/200/300',
  //   location: 'Venue: Dialogues Cafe, JP Nagar',
  //   audience: 'Age: All Age Groups'
  // },
  { content: 'Kirigami Workshop',
    timing: 'July 20 | 3:00pm - 5:30pm',
    range: moment.range(JULY20.clone().hour(8),
      JULY20.clone().hour(11)),
    details: 'Kirigami is the result of geometry and creativity coming together! It is a form of creative paper crafting. Here is what we do – we teach you how to cut and fold paper in unique patterns to create individualised paper art. You will not believe how meditative this art form is!',
    image: ImgJULY20,
    link: '/comingsoon.html',
    location: 'Venue: Dialogues Cafe, JP Nagar',
    audience: 'Age: 10yrs +'
  }
]);

export const HIGHLIGHT_EVENT = {
  content: EVENTS.events[0].attributes.content,
  timing: EVENTS.events[0].attributes.timing,
  range: EVENTS.events[0].attributes.range,
  details: EVENTS.events[0].attributes.details,
  image: EVENTS.events[0].attributes.image,
  link: EVENTS.events[0].attributes.link,
  location: EVENTS.events[0].attributes.location,
  audience: EVENTS.events[0].attributes.audience
};

/*
margin: 0;
font-size: 12px;
font-weight: 600;
height: 100%;
overflow: hidden;
*/
