import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';

import {clearStocks} from '../actions';
import StockInput from './stockInput';
import {Panel, Form, FormControl, Table, Button} from 'react-bootstrap';

class RuleCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stock: null};
  }

  _onStockSelected(selectedStocks) {
    const stock = _.first(selectedStocks);
    this.setState({
      stock: stock
    });
  }

  _onCancel() {
    this.props.dispatch(clearStocks());
    this.setState({
      stock: null
    });
  }

  render() {
    const {stock} = this.state;

    return (
      <Panel header={<h3>创建订单</h3>}>
        <StockInput onStockSelected={this._onStockSelected.bind(this)}/>

        {
          stock && (
            <Form horizontal className='rule-creator__form'>
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
                    <FormControl id='stockCode' type='text' value={stock.code} readOnly/>
                  </td>
                  <td>
                    <FormControl id='stockName' type='text' value={stock.name} readOnly/>
                  </td>
                  <td>
                    <FormControl id='operation' componentClass='select' placeholder='BUY'>
                      <option value='BUY'>买入</option>
                      <option value='SELL'>卖出</option>
                    </FormControl>
                  </td>
                  <td>
                    <FormControl id='price' type='number' min='0' step='0.01'/>
                  </td>
                  <td>
                    <FormControl id='volumn' type='number' min='100' step='100'/>
                  </td>
                  <td>
                    <FormControl id='offset' type='number' min='0' step='0.01' defaultValue={0.3}/>
                  </td>
                  <td>
                    <FormControl id='instant' componentClass='select' placeholder='false'>
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
    );
  }
}

export default connect()(RuleCreator);