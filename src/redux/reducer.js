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
      const resetCharacters = state.Characters.map((c) => {
        return { ...c, score: (c.score = 0) };
      });
      return { Characters: resetCharacters };
    default:
      return state;
  }
};

export default reducer;
