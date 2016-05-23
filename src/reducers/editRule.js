import {EDIT_RULE} from '../constants/actionType';
const {EDIT_RULE_REQUEST, EDIT_RULE_COMPLETED, EDIT_RULE_FAILED} = EDIT_RULE;

export default function editRule(state = {}, action) {
  switch (action.type) {
    case EDIT_RULE_REQUEST:
      return {};
    case EDIT_RULE_COMPLETED:
      return action.response;
    default:
      return {};
  }
}