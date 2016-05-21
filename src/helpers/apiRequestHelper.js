import numeral from 'numeral';

export function transformToCreateRuleApiRequest(formData) {
  return {
    stock: {
      id: formData.stockId
    },
    operation: formData.operation,
    price: numeral().unformat(formData.price),
    volumn: numeral().unformat(formData.volumn),
    offset: numeral().unformat(formData.offset),
    instant: JSON.parse(formData.instant)
  }
}