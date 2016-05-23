import {combineReducers} from 'redux';
import ruleOps from './ruleOps';
import login from './login';
import rulesList from './rulesList';
import stocks from './stocks';
import createRule from './createRule';
import ruleStatus from './updateRuleStatus';
import deleteStatus from './deleteRule';

const rootReducer = combineReducers({
  ruleOps,
  login,
  rulesList,
  stocks,
  createRule,
  ruleStatus,
  deleteStatus
});

export default rootReducer;