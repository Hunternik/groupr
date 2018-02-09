import axios from 'axios';
import { FETCH_COMPANIES } from './types';

export const fetchEventSponsors = (eventId) => async (dispatch) => {
  const res = await axios.get(`/api/company/event/${eventId}`);
  dispatch({
    type: FETCH_COMPANIES,
    payload: res.data
  });
};
