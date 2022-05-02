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
          // Turn below code into array of objects, instead of
          // object, with objects
          return { ...value, score: (value.score += 1) };
          // Characters = [stuff in it]
        }
        return value;
      });
    default:
      return state;
  }
};

export default reducer;

