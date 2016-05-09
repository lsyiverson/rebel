import React from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';

import {getRulesList} from '../actions';

class HomePage extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getRulesList('request'));
  }
  
  render() {
    console.log('render', this.props);
    return (
      <div className='home-page'>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='#'>OrangeMagic</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    rulesList: state.getRulesList.rulesList
  }
}

export default connect(mapStateToProps)(HomePage);