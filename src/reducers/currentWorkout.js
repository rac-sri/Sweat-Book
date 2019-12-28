import * as types from '../actions/types';

export const currentWorksout = (state = [], {type, payload}) => {
  switch (type) {
    case types.FETCH_CURRENT_WORKOUT_COMPLETE:
      return payload;
    case types.ADD_EXERCISE_COMPLETE:
      return [...state, payload];
    default:
      return state;
  }
};
