import { CHANGE_SCORE, RESET_STATE } from './actionTypes';
import Characters from '../Characters';

const initialState = {
  Characters,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE:
      const characters = state.Characters.map((c, i) => {
        if (action.payload.index === i) {
          return { ...c, score: (c.score += 1) };
        } else {
          return c;
        }
      });
      return { Characters: characters };
    case RESET_STATE:
      return { Characters: Characters };
    default:
      return state;
  }
};

export default reducer;
