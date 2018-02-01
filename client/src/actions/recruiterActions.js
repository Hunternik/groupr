import axios from 'axios';
import { FETCH_RECRUITER } from './types';

export const fetchRecruiter = () => 
  async dispatch => {
    const res = await axios.get('/api/recruiter')
    dispatch({ type: FETCH_RECRUITER, payload: res.data });
};