import {DELETE_RULE} from '../constants/actionType';
import operationResult from '../constants/operationResult';

const {DELETE_RULE_REQUEST, DELETE_RULE_COMPLETED, DELETE_RULE_FAILED} = DELETE_RULE;

export default function deleteRule(state = {}, action) {
  switch (action.type) {
    case DELETE_RULE_REQUEST:
      return {};
    case DELETE_RULE_COMPLETED:
      return {
        ruleId: action.ruleId,
        result: operationResult.SUCCESS
      };
    default:
      return {};
  }
}