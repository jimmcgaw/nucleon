import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from "./routes";
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// we could initial the state here with data fetched from a server 
// in this function call.
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);