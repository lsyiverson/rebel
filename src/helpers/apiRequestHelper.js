import numeral from 'numeral';
import _ from 'lodash';

export function transformToCreateRuleApiRequest(formData) {
  const request = {
    stock: {
      id: formData.stockId
    },
    operation: formData.operation,
    price: numeral().unformat(formData.price),
    volumn: numeral().unformat(formData.volumn),
    offset: numeral().unformat(formData.offset),
    instant: JSON.parse(formData.instant)
  };
  
  if (formData.id) {
    _.merge(request, {id: formData.id});
  }
  return request;
}