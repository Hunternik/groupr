import axios from 'axios';
import { FETCH_EVENT } from './types';

export const fetchEvent = (data) => (
  {
    type: FETCH_EVENT,
    payload: data
  }
  // async dispatch => {
  //   const res = await axios.get(`/api/current_event/${data.eventID}`)
  //   dispatch({ 
  //     type: FETCH_EVENT, 
  //     payload: res.data})
  // }
);
