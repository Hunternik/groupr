import axios from 'axios';
import { FETCH_EVENT } from './types';

export const fetchEvent = () => (
  async dispatch => {
    const res = await axios.get('/api/current_event')
    dispatch({ 
      type: FETCH_EVENT, 
      payload: res.data})
  }
);