import { FETCH_EVENT } from '../actions/types';

const INITIAL_STATE = {
  _id: null,
  eventId: null,
  title: 'Coffee Meets Code Event',
  date: null,
  location: null,
  description: null,
  attendees: null,
  sponsers: null,
  active: true,
  passed: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_EVENT:
      console.log('FETCH_EVENT fired with payload', action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
