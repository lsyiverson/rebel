import {LOGIN, GET_RULES_LIST} from '../constants/actionType';
import Q from 'q';
const {GET_RULES_LIST_REQUEST, GET_RULES_LIST_COMPLETED, GET_RULES_LIST_FAILED} = GET_RULES_LIST;

export function login() {
  return {
    type: LOGIN
  }
}

export function getRulesList(request) {
  return function(dispatch) {
    dispatch(getRulesListRequest(request));

    const mockData = [{
      "id": 2,
      "stock": {
        "id": 1828,
        "name": "久其软件",
        "code": "sz002279"
      },
      "operation": "BUY",
      "price": 45,
      "volumn": 300,
      "offset": 0.3,
      "clientId": "tim-PC",
      "instant": false,
      "status": "ACTIVE",
      "createTime": 1462204246000,
      "lastUpdateTime": 1462265436000,
      "img1": null,
      "img2": null
    }];
    const defer = Q.defer();
    setTimeout(()=> {
      defer.resolve(mockData);
    }, 1000);
    return defer.promise.then(response => dispatch(getRulesListCompleted(request, response)));
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