import Dayz from 'dayz';
import moment from 'moment';

export const DATE = moment('2015-09-11');
export const EVENTS = new Dayz.EventsCollection([
  { content: 'Three Hours',
    timing: 'Sept 8 | 2:00pm - 5:00pm',
    range: moment.range(moment('2015-09-08').clone().hour(8),
      moment('2015-09-08').clone().hour(11)),
    details: 'Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack',
    image: 'https://placekitten.com/200/300',
    link: 'https://placekitten.com/200/300'
  },
  { content: 'Two Hours ~ 8-10',
    timing: 'Sept 11 | 2:00pm - 5:00pm',
    range: moment.range(DATE.clone().hour(8),
      DATE.clone().hour(10)),
    details: 'Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack',
    image: 'http://placecage.com/200/300',
    link: 'http://placecage.com/200/300'
  },
  { content: 'Creative Coding',
    timing: 'Sept 18 | 2:00pm - 5:00pm',
    range: moment.range(moment('2015-09-18').clone().hour(8),
      moment('2015-09-18').clone().hour(11)),
    details: 'Ask for petting pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now or attack',
    image: 'http://placebear.com/200/300',
    link: 'http://placebear.com/200/300'
  }
]);
