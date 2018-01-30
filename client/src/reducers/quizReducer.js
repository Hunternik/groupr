import { FETCH_QUIZ, QUIZ_DATA } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_QUIZ:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
