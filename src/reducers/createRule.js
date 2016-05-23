import {CREATE_RULE} from '../constants/actionType';
const {CREATE_RULE_REQUEST, CREATE_RULE_COMPLETED, CREATE_RULE_FAILED} = CREATE_RULE;

export default function createRule(state = {}, action) {
  switch (action.type) {
    case CREATE_RULE_REQUEST:
      return {};
    case CREATE_RULE_COMPLETED:
      return action.response;
    default:
      return {};
  }
}