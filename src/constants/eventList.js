/* eslint-disable */

import Dayz from 'dayz';
import moment from 'moment';

export const DATE = moment('2019-09-01');

export const SEPT4 = moment('2019-09-04');
export const SEPT11 = moment('2019-09-11');
export const SEPT18 = moment('2019-09-18');
export const SEPT25 = moment('2019-09-25');

export const OCT2 = moment('2019-10-02');
export const OCT9 = moment('2019-10-09');
export const OCT16 = moment('2019-10-16');
export const OCT23 = moment('2019-10-23');

const ImgSTEM = 'https://pclimages.s3.amazonaws.com/images/events/kids_stem.png';

export const EVENTS = new Dayz.EventsCollection([
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(SEPT4.clone().hour(8),
      SEPT4.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(SEPT11.clone().hour(8),
      SEPT11.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(SEPT18.clone().hour(8),
      SEPT18.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(SEPT25.clone().hour(8),
      SEPT25.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(OCT2.clone().hour(8),
      OCT2.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(OCT9.clone().hour(8),
      OCT9.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(OCT16.clone().hour(8),
      OCT16.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
  },
  {
    content: 'STEM Course for Kids',
    timing: 'Sept 4 - Oct 23 | 4:00pm - 5:30pm',
    range: moment.range(OCT23.clone().hour(8),
      OCT23.clone().hour(11)),
    details: `Tease your child's natural curiosity with engaging activities, puzzles and tools that engross your child in SREM projects and builds their interests in learning about technology. Come join us for this 8-class session to learn more!
    RSVP at +91-9886795010 or + 91-9513222681`,
    image: ImgSTEM,
    // link: 'https://www.eventshigh.com/detail/Bangalore/a5e21b71daa9e7f042ce3b3cb61adbe4',
    location: 'Venue: The Popsicle Studio, Cunningham Rd',
    audience: 'Age: 8-12 yrs +'
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
