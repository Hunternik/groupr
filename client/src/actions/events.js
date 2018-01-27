import axios from 'axios';
import { FETCH_EVENT } from './types';

export const fetchEvent = (data) => (
  // console.log('FETCH_EVENT ACTION')
  {
    type: FETCH_EVENT,
    payload: data
  }
  // async dispatch => {
  //   const res = await axios.get('/api/current_event')
  //   dispatch({ 
  //     type: FETCH_EVENT, 
  //     payload: res.data})
  // }
);
