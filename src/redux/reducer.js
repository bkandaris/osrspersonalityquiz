import { CHANGE_SCORE } from './actionTypes';
import Characters from '../Characters';

const initialState = {
  Characters,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      return state.Characters.map((value, index) => {
        if (action.payload.index === index) {
          console.log('this is the value', value);
          return { ...value, score: (value.score += 1) };
        }
        return value;
      });
    default:
      return state;
  }
};

export default reducer;

