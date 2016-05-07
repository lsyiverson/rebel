import {ADD_RULE} from '../constants/actionType';

export default function ruleOps(state = {}, action) {
  switch (action.type) {
    case ADD_RULE:
      return state;
    default:
      return state;
  }
}