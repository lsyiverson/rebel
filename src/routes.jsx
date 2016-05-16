import React from 'react';
import {IndexRoute, Route} from 'react-router';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';

export default (
  <Route path='/'>
    <IndexRoute component={LoginPage}/>
    <Route name='home' path='home' component={HomePage}/>
  </Route>
)