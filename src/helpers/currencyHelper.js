import numeral from 'numeral';

export function formatCurrency(value) {
  return numeral(value).format('0,0.00');
}