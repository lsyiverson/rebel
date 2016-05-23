import {UPDATE_RULE_STATUS} from '../constants/actionType';
import operationResult from '../constants/operationResult';

const {UPDATE_RULE_STATUS_REUQEST, UPDATE_RULE_STATUS_COMPLETED, UPDATE_RULE_STATUS_FAILED} = UPDATE_RULE_STATUS;

export default function ruleStatus(state = {}, action) {
  switch (action.type) {
    case UPDATE_RULE_STATUS_REUQEST:
      return {};
    case UPDATE_RULE_STATUS_COMPLETED:
      return {
        ruleId: action.ruleId,
        operation: action.operation,
        result: operationResult.SUCCESS
      };
    default:
      return {};
  }
}