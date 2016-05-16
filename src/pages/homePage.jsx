import React from 'react';
import {Link} from 'react-router';
import {Navbar, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';

import RulesList from '../components/rulesList';
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

        <Panel header={<h3>股票交易订单列表</h3>}>
          <RulesList
            rulesList={rulesList}/>
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