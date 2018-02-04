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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EVENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
