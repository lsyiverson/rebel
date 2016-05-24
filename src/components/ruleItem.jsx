import React, {PropTypes} from 'react';
import _ from 'lodash';
import {Button, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';

import operationType from '../constants/operationType';
import statusType from '../constants/statusType';
import {formatCurrency} from '../helpers/currencyHelper';
import {updateRuleStatus, deleteRule, editRule} from '../actions';

class RuleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      formData: this._initialFormData(props)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.rule, this.props.rule)) {
      this.setState({formData: this._initialFormData(nextProps)});
    }
  }

  _initialFormData(props) {
    const {rule} = props;
    return {
      id: rule.id,
      stockId: rule.stock.id,
      operation: rule.operation.toString(),
      price: rule.price.toString(),
      volumn: rule.volumn.toString(),
      offset: rule.offset.toString(),
      instant: rule.instant.toString()
    }
  }

  _getFeildProps(fieldName) {
    return {
      id: fieldName,
      onChange: e=> {
        this.state.formData[fieldName] = e.target.value;
        this.setState(this.state);
      },
      defaultValue: this.state.formData[fieldName]
    }
  }

  _toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode,
      formData: this._initialFormData(this.props)
    });
  }

  _renderButtons(ruleStatus) {
    const {rule: {id}, dispatch} = this.props;
    const {editMode, formData} = this.state;

    switch (ruleStatus) {
      case statusType.ACTIVE:
        return editMode
          ? (
          <div>
            <Button bsStyle='link' onClick={()=> {
            this.setState({editMode: false});
            dispatch(editRule(formData));
            }}>确定</Button>
            <Button bsStyle='link' onClick={this._toggleEditMode.bind(this)}>取消</Button>
          </div>
        )
          : (
          <div>
            <Button bsStyle='link' onClick={()=> {dispatch(updateRuleStatus(id, 'deactive'))}}>取消激活</Button>
            <Button bsStyle='link' onClick={this._toggleEditMode.bind(this)}>编辑</Button>
          </div>
        );
      case statusType.INACTIVE:
        return editMode
          ? (
          <div>
            <Button bsStyle='link' onClick={()=> {
            this.setState({editMode: false});
            dispatch(editRule(formData));
            }}>确定</Button>
            <Button bsStyle='link' onClick={this._toggleEditMode.bind(this)}>取消</Button>
          </div>
        )
          : (
          <div>
            <Button bsStyle='link' onClick={()=> {dispatch(updateRuleStatus(id, 'active'))}}>激活</Button>
            <Button bsStyle='link' onClick={this._toggleEditMode.bind(this)}>编辑</Button>
            <Button bsStyle='link' onClick={()=> {dispatch(deleteRule(id))}}>删除</Button>
          </div>
        );
      case statusType.DONE:
        return (
          <div>
            <Button bsStyle='link' onClick={()=> {dispatch(deleteRule(id))}}>删除</Button>
          </div>
        );
    }
  }

  render() {
    const {rule, ruleStatus} = this.props;
    const {editMode} = this.state;
    return (
      <tr className='rule-item'>
        <td>{rule.stock.code}</td>
        <td>{rule.stock.name}</td>
        <td>{operationType[rule.operation]}</td>
        <td>
          {
            editMode
              ? <FormControl {...this._getFeildProps('price')} type='number' min='0' step='0.01'/>
              : formatCurrency(rule.price)
          }
        </td>
        <td>
          {
            editMode
              ? <FormControl {...this._getFeildProps('volumn')} type='number' min='100' step='100'/>
              : rule.volumn
          }
        </td>
        <td>
          {
            editMode
              ? <FormControl {...this._getFeildProps('offset')} type='number' min='0' step='0.01'/>
              : formatCurrency(rule.offset)
          }
        </td>
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
};

RuleItem.propTypes = {
  rule: PropTypes.object.isRequired,
  ruleStatus: PropTypes.oneOf(_.values(statusType)).isRequired
};

export default connect()(RuleItem);