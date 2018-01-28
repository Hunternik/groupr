import { FETCH_QUIZ } from "./types";
import axios from 'axios';

export const fetch_quiz = () => async dispatch => {
  const res = await axios.get("/api/quiz");
  console.log(res.data);

  dispatch({ 
    type: FETCH_QUIZ,
    payload: res.data
  });
};
