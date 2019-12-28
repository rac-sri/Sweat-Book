import * as types from '../actions/types';

export const ui = (
  state = {
    exerciseModel: false,
  },
  {type, payload},
) => {
  switch (type) {
    case types.SET_EXCERCISE_VISIBILITY:
      return {
        ...state,
        exerciseModal: payload,
      };
    default:
      return state;
  }
};
