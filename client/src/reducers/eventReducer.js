import { FETCH_EVENT, UPDATE_USER_EVENT } from '../actions/types';

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
  passed: null,
  companies: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EVENT:
			return { ...state, ...action.payload };
		case UPDATE_USER_EVENT:
			return action.payload.event;
    default:
      return state;
  }
}
