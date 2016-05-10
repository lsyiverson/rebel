import 'whatwg-fetch';

import {LOGIN, GET_RULES_LIST} from '../constants/actionType';
const {GET_RULES_LIST_REQUEST, GET_RULES_LIST_COMPLETED, GET_RULES_LIST_FAILED} = GET_RULES_LIST;

export function login() {
  return {
    type: LOGIN
  }
}

export function getRulesList(request) {
  return function(dispatch) {
    dispatch(getRulesListRequest(request));

    return fetch('http://localhost:10086/rules')
      .then(response=> {return response.json()})
      .then(response => dispatch(getRulesListCompleted(request, response)));
  }
}

function getRulesListRequest(request) {
  return {
    type: GET_RULES_LIST_REQUEST,
    request: request
  }
}

function getRulesListCompleted(request, response) {
  return {
    type: GET_RULES_LIST_COMPLETED,
    request: request,
    response: response
  }
}