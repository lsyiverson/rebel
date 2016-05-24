import {combineReducers} from 'redux';
import ruleOps from './ruleOps';
import login from './login';
import rulesList from './rulesList';
import stocks from './stocks';
import createRule from './createRule';

const rootReducer = combineReducers({
  ruleOps,
  login,
  rulesList,
  stocks,
  createRule
});

export default rootReducer;