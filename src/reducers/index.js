import {combineReducers} from 'redux';
import ruleOps from './ruleOps';
import login from './login';
import rulesList from './rulesList';

const rootReducer = combineReducers({
  ruleOps,
  login,
  rulesList
});

export default rootReducer;