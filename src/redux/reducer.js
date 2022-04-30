import { CHANGE_SCORE } from './actionTypes';
import Characters from '../Characters';

const initialState = {
  Characters
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        Characters: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
