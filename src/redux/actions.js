import { CHANGE_SCORE } from './actionTypes';

export const changeScore = (index) => {
  return {
    type: CHANGE_SCORE,
    payload: { index },
  };
};
