import {QUERY_STOCK} from '../constants/actionType';
const {QUERY_STOCK_REQUEST, QUERY_STOCK_COMPLETED, QUERY_STOCK_FAILED} = QUERY_STOCK;

export default function stocks(state = [], action) {
  switch (action.type) {
    case QUERY_STOCK_REQUEST:
      return state;
    case QUERY_STOCK_COMPLETED:
      return action.response;
    default:
      return state;
  }
}