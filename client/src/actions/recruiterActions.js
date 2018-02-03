import axios from 'axios';
import { FETCH_RECRUITER } from './types';

export const fetchRecruiter = (data) => 
  async dispatch => {
    const res = await axios.post('/api/company', data)
    console.log(res);
    dispatch({ type: FETCH_RECRUITER, payload: res.data });
};