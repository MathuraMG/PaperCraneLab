/* eslint-disable */

import Dayz from 'dayz';
import moment from 'moment';

export const DATE = moment('2019-10-01');

export const OCT3 = moment('2019-10-3');
export const OCT4 = moment('2019-10-4');
export const OCT5 = moment('2019-10-5');

const ImgOCT3 = 'https://pclimages.s3.amazonaws.com/images/events/2019_10_03_Popsicle_Dussera.png';
const ImgOCT4 = 'https://pclimages.s3.amazonaws.com/images/events/2019_10_04_Popsicle_Dussera.png';
const ImgOCT5 = 'https://pclimages.s3.amazonaws.com/images/events/2019_10_05_Popsicle_Dussera.png';


export const EVENTS = new Dayz.EventsCollection([
  {
    content: 'Coding Stickers for Kids',
    timing: 'October 3rd | 11:00am - 1:00pm',
    range: moment.range(OCT3.clone().hour(11),
      OCT3.clone().hour(13)),
    details: `At this introduction to Coding workshop, we will learn the basics of programming through fun drawings and animations!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgOCT3,
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'Kirigami for Kids',
    timing: 'October 4th | 11:00am - 1:00pm',
    range: moment.range(OCT4.clone().hour(11),
      OCT4.clone().hour(13)),
    details: `At our Kirigami workshop, and combine the world of art and geometry to create gorgeous structures with paper.
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgOCT4,
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'Woodworking for Kids',
    timing: 'October 5th | 11:00am - 1:00pm',
    range: moment.range(OCT5.clone().hour(11),
      OCT5.clone().hour(13)),
    details: `Get your children to experience the joy of being a tech-art-maker at this one of a kind workshop. We will work together to make key holders out of recycled keys with basic mechanical tools!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgOCT5,
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  }
]);

export const HIGHLIGHT_EVENT = {
  content: EVENTS.events[0].attributes.content,
  timing: EVENTS.events[0].attributes.timing,
  range: EVENTS.events[0].attributes.range,
  details: EVENTS.events[0].attributes.details,
  image: EVENTS.events[0].attributes.image?EVENTS.events[0].attributes.image:'',
  link: EVENTS.events[0].attributes.link,
  location: EVENTS.events[0].attributes.location,
  audience: EVENTS.events[0].attributes.audience? EVENTS.events[0].attributes.audience: ''
};

/*
margin: 0;
font-size: 12px;
font-weight: 600;
height: 100%;
overflow: hidden;
*/
