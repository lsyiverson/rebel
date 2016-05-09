import {GET_RULES_LIST} from '../constants/actionType';
const {GET_RULES_LIST_REQUEST, GET_RULES_LIST_COMPLETED, GET_RULES_LIST_FAILED} = GET_RULES_LIST;

export default function rulesList(state = [], action) {
  switch (action.type) {
    case GET_RULES_LIST_REQUEST:
      return state;
    case GET_RULES_LIST_COMPLETED:
      return action.response;
    default:
      return state;
  }
}