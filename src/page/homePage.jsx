import React from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

export default class HomePage extends React.Component {
  render() {
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