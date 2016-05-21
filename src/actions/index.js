import 'whatwg-fetch';

import {LOGIN, GET_RULES_LIST, QUERY_STOCK, CLEAR_STOCK} from '../constants/actionType';
import url from 'url';
const {GET_RULES_LIST_REQUEST, GET_RULES_LIST_COMPLETED, GET_RULES_LIST_FAILED} = GET_RULES_LIST;
const {QUERY_STOCK_REQUEST, QUERY_STOCK_COMPLETED, QUERY_STOCK_FAILED} = QUERY_STOCK;

const domain = 'http://localhost:10086';

export function login() {
  return {
    type: LOGIN
  }
}

export function getRulesList(request) {
  return function(dispatch) {
    dispatch(getRulesListRequest(request));

    return fetch(url.resolve(domain, 'orders'))
      .then(responseStream => {return responseStream.json()})
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
      .then(responseStream => {return responseStream.json()})
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