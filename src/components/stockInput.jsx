import React, {PropTypes} from 'react';
import Typeahead from 'react-bootstrap-typeahead';
import _ from 'lodash';
import {connect} from 'react-redux';
import {queryStocks} from '../actions';

class StockInput extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (_.isEmpty(nextProps.stocks)) {
      this.refs.stockInput.refs.inner.setState({selected: [], text: ''});
    }
  }
  _onTextChange(text) {
    const {dispatch} = this.props;
    return !_.isEmpty(text) && dispatch(queryStocks(text));
  }
  render() {
    const {stocks, onStockSelected} = this.props;
    const stockInfos = _.chain(stocks).map(stock => {
      const stockInfo = _.merge({}, stock, {displayName: `${stock.abbr} ${stock.name}`});
      return stockInfo;
    }).value();

    return (
      <Typeahead
        ref='stockInput'
        onInputChange={_.debounce(this._onTextChange.bind(this), 200)}
        onChange={onStockSelected}
        options={stockInfos}
        labelKey={'displayName'}
        placeholder={'输入股票拼音缩写开始查询股票, 如: jqrj'}
      />
    );
  }
}

StockInput.defaultProps = {
  onStockSelected: _.noop,
  stocks: []
};

StockInput.propTypes = {
  onStockSelected: PropTypes.func,
  stocks: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  };
}

export default connect(mapStateToProps)(StockInput);