import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import routes from './routes.jsx';
import {Router, browserHistory} from 'react-router';

module.exports = function(rootNode) {
  return ReactDOM.render(
    (
      <Router history={browserHistory} routes={routes}/>
    )
    , rootNode);
};