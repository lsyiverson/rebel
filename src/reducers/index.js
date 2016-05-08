import {combineReducers} from 'redux';
import ruleOps from './ruleOps';
import login from './login';

const rootReducer = combineReducers({
  ruleOps,
  login
});

export default rootReducer;