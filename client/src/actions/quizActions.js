import { FETCH_QUIZ, FETCH_EVENT } from './types';
import axios from 'axios';

export const fetch_quiz = () => async dispatch => {
  const res = await axios.get('/api/quiz');

  dispatch({
    type: FETCH_QUIZ,
    payload: res.data[0]
  });
};

export const passed_quiz = data => async dispatch => {
  const res = await axios.post('/api/current_event/quiz/pass', data);
  console.log(res);
  dispatch({
    type: FETCH_EVENT,
    // sends this object to all of the reducers to see which reducer has a matching type.
    payload: res.data[0]
  });
};

export const failed_quiz = data => async dispatch => {
  const res = await axios.post('/api/current_event/quiz/fail', data);

  dispatch({
    type: FETCH_EVENT,
    payload: res.data[0]
  });
};
