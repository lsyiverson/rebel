import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';
import _ from 'lodash';

import operationType from '../constants/operationType';
import statusType from '../constants/statusType';
import {formatCurrency} from '../helpers/currencyHelper';

class RulesList extends React.Component {
  render() {
    const {rulesList} = this.props;
    return (
      <Table striped bordered condensed responsive>
        <thead>
        <tr>
          <th>股票代码</th>
          <th>股票名称</th>
          <th>操作</th>
          <th>价格</th>
          <th>数量</th>
          <th>价格偏移</th>
          <th>是否立即执行</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        {
          _.map(rulesList, (rule, idx) => {
            return (
              <tr key={idx}>
                <td>{rule.stock.code}</td>
                <td>{rule.stock.name}</td>
                <td>{operationType[rule.operation]}</td>
                <td>{formatCurrency(rule.price)}</td>
                <td>{rule.volumn}</td>
                <td>{formatCurrency(rule.offset)}</td>
                <td>{rule.instant ? '是' : '否'}</td>
                <td>{statusType[rule.status]}</td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    );
  }
}
RulesList.defaultProps = {
  rulesList: []
};

RulesList.propTypes = {
  rulesList: PropTypes.array.isRequired
};

export default RulesList;