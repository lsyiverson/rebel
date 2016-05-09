import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import {Router, hashHistory} from 'react-router';
import configureStore from './store/configureStore';

const store = configureStore();

module.exports = function(rootNode) {
  return ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory} routes={routes}/>
    </Provider>
    , rootNode);
};