import { CHANGE_SCORE, RESET_STATE } from './actionTypes';

export const changeScore = (index) => {
  return {
    type: CHANGE_SCORE,
    payload: { index },
  };
};

export const resetState = (payload) => {
  return {
    type: RESET_STATE,
    payload,
  };
};
