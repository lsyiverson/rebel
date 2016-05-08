import {LOGIN} from '../constants/actionType';

export default function login(state = {time: 0}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        time: state.time + 1
      };
    default:
      return state;
  }
}