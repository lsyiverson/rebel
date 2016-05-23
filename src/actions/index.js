import 'whatwg-fetch';
import url from 'url';

import {
  LOGIN,
  GET_RULES_LIST,
  QUERY_STOCK,
  CLEAR_STOCK,
  CREATE_RULE,
  UPDATE_RULE_STATUS,
  DELETE_RULE,
  EDIT_RULE
} from '../constants/actionType';
import {transformToCreateRuleApiRequest} from '../helpers/apiRequestHelper';

const {GET_RULES_LIST_REQUEST, GET_RULES_LIST_COMPLETED, GET_RULES_LIST_FAILED} = GET_RULES_LIST;
const {QUERY_STOCK_REQUEST, QUERY_STOCK_COMPLETED, QUERY_STOCK_FAILED} = QUERY_STOCK;
const {CREATE_RULE_REQUEST, CREATE_RULE_COMPLETED, CREATE_RULE_FAILED} = CREATE_RULE;
const {UPDATE_RULE_STATUS_REQUEST, UPDATE_RULE_STATUS_COMPLETED, UPDATE_RULE_STATUS_FAILED} = UPDATE_RULE_STATUS;
const {DELETE_RULE_REQUEST, DELETE_RULE_COMPLETED, DELETE_RULE_FAILED} = DELETE_RULE;
const {EDIT_RULE_REQUEST, EDIT_RULE_COMPLETED, EDIT_RULE_FAILED} = EDIT_RULE;

const domain = 'http://localhost:8080/api/';

export function login() {
  return {
    type: LOGIN
  }
}

export function getRulesList(request) {
  return function(dispatch) {
    dispatch(getRulesListRequest(request));

    return fetch(url.resolve(domain, 'orders'))
      .then(responseStream => {
        return responseStream.json()
      })
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

export function queryStocks(stockShortName) {
  return function(dispatch) {
    dispatch(queryStocksRequest(stockShortName));

    return fetch(url.resolve(domain, `stocks/${stockShortName}`))
      .then(responseStream => {
        return responseStream.json()
      })
      .then(response => dispatch(queryStocksCompleted(stockShortName, response)));
  }
}

function queryStocksRequest(stockShortName) {
  return {
    type: QUERY_STOCK_REQUEST,
    stockShortName: stockShortName
  }
}

function queryStocksCompleted(stockShortName, response) {
  return {
    type: QUERY_STOCK_COMPLETED,
    stockShortName: stockShortName,
    response: response
  }
}

export function clearStocks() {
  return {
    type: CLEAR_STOCK
  }
}

export function createRule(formData) {
  const request = transformToCreateRuleApiRequest(formData);
  return function(dispatch) {
    dispatch(createRuleRequest(request));

    return fetch(url.resolve(domain, `orders`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }).then(responseStream => responseStream.json())
      .then(response => dispatch(createRuleCompleted(request, response)))
  }
}

function createRuleRequest(apiRequest) {
  return {
    type: CREATE_RULE_REQUEST,
    request: apiRequest
  }
}

function createRuleCompleted(request, response) {
  return {
    type: CREATE_RULE_COMPLETED,
    request: request,
    response: response
  }
}

export function updateRuleStatus(ruleId, operation) {
  return function(dispatch) {
    dispatch(updateRuleStatusRequest(ruleId, operation));

    return fetch(url.resolve(domain, `orders/${ruleId}/${operation}`), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(dispatch(updateRuleStatusCompleted(ruleId, operation)));
  }
}

function updateRuleStatusRequest(ruleId, operation) {
  return {
    type: UPDATE_RULE_STATUS_REQUEST,
    ruleId: ruleId,
    operation: operation
  }
}

function updateRuleStatusCompleted(ruleId, operation) {
  return {
    type: UPDATE_RULE_STATUS_COMPLETED,
    ruleId: ruleId,
    operation: operation
  }
}

export function deleteRule(ruleId) {
  return function(dispatch) {
    dispatch(deleteRuleRequest(ruleId));

    return fetch(url.resolve(domain, `orders/${ruleId}`), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(dispatch(deleteRuleCompleted(ruleId)));
  }
}

function deleteRuleRequest(ruleId) {
  return {
    type: DELETE_RULE_REQUEST,
    ruleId: ruleId
  }
}

function deleteRuleCompleted(ruleId) {
  return {
    type: DELETE_RULE_COMPLETED,
    ruleId: ruleId
  }
}

export function editRule(formData) {
  const request = transformToCreateRuleApiRequest(formData);
  return function(dispatch) {
    dispatch(editRuleRequest(request));

    return fetch(url.resolve(domain, `orders/${request.id}`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }).then(responseStream => responseStream.json())
      .then(response => dispatch(editRuleCompleted(request, response)));
  }
}

function editRuleRequest(request) {
  return {
    type: EDIT_RULE_REQUEST,
    request: request
  }
}

function editRuleCompleted(request, response) {
  return {
    type: EDIT_RULE_COMPLETED,
    request: request,
    response: response
  }
}