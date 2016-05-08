import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import {login} from '../actions';

class LoginPage extends React.Component {

  _onButtonClick() {
    const {dispatch, time} = this.props;
    if (time >= 2) {
      this.context.router.replace('/home');
    }
    dispatch(login());
  }

  render() {
    const {time} = this.props;
    return (
      <div>
        <h1>Login Frame</h1>
        <Button
          bsStyle='primary'
          onClick={this._onButtonClick.bind(this)}
          active>
          {`Click ${3 - time} go to Home`}
        </Button>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    time: state.login.time
  }
}

export default connect(mapStateToProps)(LoginPage);