import React from 'react';
import {IndexRoute, Route} from 'react-router';
import LoginPage from './page/loginPage.jsx';
import HomePage from './page/homePage.jsx';

export default (
  <Route path='/'>
    <IndexRoute component={LoginPage}/>
    <Route name='home' path='home' component={HomePage}/>
  </Route>
)