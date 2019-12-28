import {exercises as initState} from '../initialState';
console.log(initState);
export const exercise = (state = initState, {type, payload}) => {
  return state;
};
