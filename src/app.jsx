import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import routes from './routes';
import {Router, hashHistory} from 'react-router';

module.exports = function(rootNode) {
  return ReactDOM.render(
    (
      <Router history={hashHistory} routes={routes}/>
    )
    , rootNode);
};