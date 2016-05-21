import React from 'react';
import {Link} from 'react-router';
import {Navbar, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';

import RulesList from '../components/rulesList';
import RuleCreator from '../components/ruleCreator';
import {getRulesList} from '../actions';

class HomePage extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getRulesList('request'));
  }

  render() {
    const {rulesList} = this.props;
    return (
      <div className='home-page'>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='#'>OrangeMagic</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <RuleCreator />

        <Panel header={<h3>激活订单列表</h3>}>
          <RulesList
            rulesList={_.filter(rulesList, {status: 'ACTIVE'})}/>
        </Panel>

        <Panel header={<h3>未激活订单列表</h3>}>
          <RulesList
            rulesList={_.filter(rulesList, {status: 'INACTIVE'})}/>
        </Panel>

        <Panel header={<h3>已完成订单列表</h3>}>
          <RulesList
            rulesList={_.filter(rulesList, {status: 'DONE'})}/>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rulesList: state.rulesList
  }
}

export default connect(mapStateToProps)(HomePage);