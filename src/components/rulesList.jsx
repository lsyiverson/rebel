import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';
import _ from 'lodash';

import RuleItem from './ruleItem';

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
            return <RuleItem key={idx} rule={rule}/>
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