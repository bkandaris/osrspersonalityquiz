import { Action } from 'history';
import { CHANGE_SCORE, RESET_STATE } from './actionTypes';

export const changeScore = (index) => {
  return {
    type: CHANGE_SCORE,
    payload: { index },
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};
