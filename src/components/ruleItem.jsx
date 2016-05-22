import React, {PropTypes} from 'react';
import _ from 'lodash';
import {Button} from 'react-bootstrap';

import operationType from '../constants/operationType';
import statusType from '../constants/statusType';
import {formatCurrency} from '../helpers/currencyHelper';

class RuleItem extends React.Component {

  _renderButtons(ruleStatus) {
    switch (ruleStatus) {
      case statusType.ACTIVE:
        return (
          <div>
            <Button bsStyle='warning' onClick={()=> {}}>取消激活</Button>
          </div>
        );
      case statusType.INACTIVE:
        return (
          <div>
            <Button bsStyle='primary' onClick={()=> {}}>激活</Button>
          </div>
        );
      case statusType.DONE:
        return (
          <div>
            <Button bsStyle='danger' onClick={()=> {}}>删除</Button>
          </div>
        );
    }
  }

  render() {
    const {rule, ruleStatus} = this.props;
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
        <td>
          {this._renderButtons(ruleStatus)}
        </td>
      </tr>
    );
  }
}

RuleItem.propTypes = {
  rule: PropTypes.object.isRequired,
  ruleStatus: PropTypes.oneOf(_.values(statusType)).isRequired
};

export default RuleItem;