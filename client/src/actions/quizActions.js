import { FETCH_QUIZ } from "./types";

export const fetch_quiz = data => ({
  type: FETCH_QUIZ,
  payload: data
});
