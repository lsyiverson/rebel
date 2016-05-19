import {combineReducers} from 'redux';
import ruleOps from './ruleOps';
import login from './login';
import rulesList from './rulesList';
import stocks from './stocks';

const rootReducer = combineReducers({
  ruleOps,
  login,
  rulesList,
  stocks
});

export default rootReducer;