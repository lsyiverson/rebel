import React, {PropTypes} from 'react';
import _ from 'lodash';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import operationType from '../constants/operationType';
import statusType from '../constants/statusType';
import {formatCurrency} from '../helpers/currencyHelper';
import {updateRuleStatus, getRulesList, deleteRule} from '../actions';
import operationResult from '../constants/operationResult';

class RuleItem extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (_.isEqual(nextProps.operationResult, operationResult.SUCCESS)) {
      this.props.dispatch(getRulesList('request'));
    }
  }

  _renderButtons(ruleStatus) {
    const {rule: {id}, dispatch} = this.props;
    switch (ruleStatus) {
      case statusType.ACTIVE:
        return (
          <div>
            <Button bsStyle='warning' onClick={()=> {dispatch(updateRuleStatus(id, 'deactive'))}}>取消激活</Button>
          </div>
        );
      case statusType.INACTIVE:
        return (
          <div>
            <Button bsStyle='primary' onClick={()=> {dispatch(updateRuleStatus(id, 'active'))}}>激活</Button>
          </div>
        );
      case statusType.DONE:
        return (
          <div>
            <Button bsStyle='danger' onClick={()=> {dispatch(deleteRule(id))}}>删除</Button>
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

RuleItem.defaultProps = {
  operationResult: ''
};

RuleItem.propTypes = {
  rule: PropTypes.object.isRequired,
  ruleStatus: PropTypes.oneOf(_.values(statusType)).isRequired,
  operationResult: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let operationResult = '';
  if (state.ruleStatus.ruleId === ownProps.rule.id) {
    operationResult = state.ruleStatus.result;
  }
  if (state.deleteStatus.ruleId === ownProps.rule.id) {
    operationResult = state.deleteStatus.result;
  }
  return {operationResult: operationResult};
}

export default connect(mapStateToProps)(RuleItem);