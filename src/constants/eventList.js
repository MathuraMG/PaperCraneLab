/* eslint-disable */

import Dayz from 'dayz';
import moment from 'moment';

export const DATE = moment('2019-09-01');

export const SEPT14 = moment('2019-09-14');
export const SEPT21 = moment('2019-09-21');
export const OCT12 = moment('2019-10-12');

const ImgSEPT14 = 'https://pclimages.s3.amazonaws.com/images/events/20190914_Paper Circuits-01.png';
const ImgSEPT21 = 'https://pclimages.s3.amazonaws.com/images/events/2019_09_21_CCsante_Meetup-01.png';

export const EVENTS = new Dayz.EventsCollection([
  {
    content: 'Paper Circuits for Kids',
    timing: 'Sept 14 | 11:00am - 5:30pm',
    range: moment.range(SEPT14.clone().hour(8),
      SEPT14.clone().hour(11)),
    details: `Instill the spirit of engineering in your children early on. Introduce them to  basic engineering tools  and excite them to think analytically while working on fun art and tech projects!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSEPT14,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },

  {
    content: 'Creative Coding Sante Online Meetup',
    timing: 'Sept 14 | 11:00am - 5:30pm',
    range: moment.range(SEPT21.clone().hour(8),
      SEPT21.clone().hour(11)),
    details: `Join our meetup to learn more about creative coding and daily art practice. Discuss the joys of making through davily practice such as #100daysofmaking.
    Email hello@papercranelab. to RSVP`,
    image: ImgSEPT21,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: Voxelscapes Studio, Koramangala',
    // audience: 'Age: 8-12 yrs +'
  },


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
