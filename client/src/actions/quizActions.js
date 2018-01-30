import { FETCH_QUIZ } from './types';
import axios from 'axios';

export const fetch_quiz = () => async dispatch => {
  const res = await axios.get('/api/quiz');

  dispatch({
    type: FETCH_QUIZ,
    payload: res.data[0]
  });
};
