import axios from 'axios';
import { FETCH_EVENT } from './types';

export const fetchEvent = id => async dispatch => {
  const res = await axios.get(`/api/current_event/${id}`);
  // const res = await axios.get(`/api/current_event/LA`);
  dispatch({
    type: FETCH_EVENT,
    payload: res.data[0]
  });
  console.log(res, "mmm2m Fetch Event mmmmm");
};
