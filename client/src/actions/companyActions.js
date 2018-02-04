import axios from 'axios';
import { FETCH_COMPANIES } from './types';

export const fetchCompanies = (eventId) => async (dispatch) => {
  const res = await axios.get(`api/company/${eventId}`);

  dispatch({
    type: FETCH_COMPANIES,
    payload: res.data
  });
};
