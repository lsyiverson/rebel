import React from 'react';

import operationType from '../constants/operationType';
import statusType from '../constants/statusType';
import {formatCurrency} from '../helpers/currencyHelper';

class RuleItem extends React.Component {
  render() {
    const {rule} = this.props;
    return (
      <tr>
        <td>{rule.stock.code}</td>
        <td>{rule.stock.name}</td>
        <td>{operationType[rule.operation]}</td>
        <td>{formatCurrency(rule.price)}</td>
        <td>{rule.volumn}</td>
        <td>{formatCurrency(rule.offset)}</td>
        <td>{rule.instant ? '是' : '否'}</td>
        <td>{statusType[rule.status]}</td>
      </tr>
    );
  }
}

RuleItem.propTypes = {
  rule: React.PropTypes.object.isRequired
};

export default RuleItem;