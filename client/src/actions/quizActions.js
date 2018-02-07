import { FETCH_QUIZ, FETCH_EVENT, UPDATE_USER_EVENT } from './types';
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

  dispatch({
    type: UPDATE_USER_EVENT,
    payload: res.data
  });
};

export const failed_quiz = data => async dispatch => {
	const res = await axios.post('/api/current_event/quiz/fail', data);

	dispatch({
    type: FETCH_EVENT,
    payload: res.data
  });
};
