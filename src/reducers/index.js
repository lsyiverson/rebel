import {combineReducers} from 'redux';
import ruleOps from './ruleOps';
import login from './login';
import getRulesList from './getRulesList';

const rootReducer = combineReducers({
  ruleOps,
  login,
  getRulesList
});

export default rootReducer;