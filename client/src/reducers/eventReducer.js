import { FETCH_EVENT } from '../actions/types';

const INITIAL_STATE = {
  eventId: '',
  eventName: '',
  eventDate: '',
  eventAddress: '',
  eventDescription: '',
  eventAttendees: [],
  eventSponsors: [],
  active: true
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_EVENT:
      console.log("FETCH_EVENT reducer fired");
      return action.payload || false;
    default:
      return state;
  }
};
