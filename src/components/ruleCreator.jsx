import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Panel, Form, FormControl, Table, Button, Modal} from 'react-bootstrap';

import {clearStocks, createRule, getRulesList} from '../actions';
import StockInput from './stockInput';
import operationType from '../constants/operationType';

class RuleCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCreateSuccess) {
      this.props.dispatch(getRulesList('request'));
      this._onCancel();
      this.setState({
        showDialog: true
      })
    }
  }

  _getInitialState() {
    return {
      stock: null,
      formData: {
        operation: 'BUY',
        offset: '0.3',
        instant: 'false'
      },
      showDialog: false
    }
  }

  _onStockSelected(selectedStocks) {
    const stock = _.first(selectedStocks);
    const formData = _.merge({}, this.state.formData, {
      stockId: stock.id,
      stockCode: stock.code,
      stockName: stock.name
    });
    this.setState({
      stock: stock,
      formData: formData
    });
  }

  _onCancel() {
    this.props.dispatch(clearStocks());
    this.setState(this._getInitialState());
  }

  _onSubmit() {
    this.props.dispatch(createRule(this.state.formData))
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

  _onCloseDialog() {
    this.setState({
      showDialog: false
    })
  }

  render() {
    const {stock, showDialog} = this.state;
    return (
      <div>
        <Modal show={showDialog}>
          <Modal.Header>
            <Modal.Title>创建订单成功</Modal.Title>
          </Modal.Header>
          <Modal.Body>你可以在列表中查看新创建的订单</Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this._onCloseDialog.bind(this)}>确定</Button>
          </Modal.Footer>
        </Modal>
        <Panel header={<h3>创建订单</h3>}>
          <StockInput onStockSelected={this._onStockSelected.bind(this)}/>
          {
            stock && (
              <Form horizontal className='rule-creator__form' onSubmit={this._onSubmit.bind(this)}>
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
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <FormControl {...this._getFeildProps('stockCode')} type='text' readOnly/>
                    </td>
                    <td>
                      <FormControl {...this._getFeildProps('stockName')} type='text' readOnly/>
                    </td>
                    <td>
                      <FormControl {...this._getFeildProps('operation')} componentClass='select'>
                        <option value='BUY'>{operationType.BUY}</option>
                        <option value='SELL'>{operationType.SELL}</option>
                      </FormControl>
                    </td>
                    <td>
                      <FormControl {...this._getFeildProps('price')} type='number' min='0' step='0.01'/>
                    </td>
                    <td>
                      <FormControl {...this._getFeildProps('volumn')} type='number' min='100' step='100'/>
                    </td>
                    <td>
                      <FormControl {...this._getFeildProps('offset')} type='number' min='0' step='0.01'/>
                    </td>
                    <td>
                      <FormControl {...this._getFeildProps('instant')} componentClass='select'>
                        <option value='true'>是</option>
                        <option value='false'>否</option>
                      </FormControl>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <div className='rule-creator__buttons'>
                  <Button bsStyle='info' onClick={this._onCancel.bind(this)}>
                    取消
                  </Button>
                  <Button bsStyle='primary' type='submit'>
                    提交
                  </Button>
                </div>
              </Form>
            )
          }
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isCreateSuccess: !_.isEmpty(state.createRule)
  };
}

export default connect(mapStateToProps)(RuleCreator);