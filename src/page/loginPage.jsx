import React from 'react';
import {Link} from 'react-router';

export default class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Login Frame</h1>
        <Link to="/home">Home</Link>
      </div>
    );
  }
};