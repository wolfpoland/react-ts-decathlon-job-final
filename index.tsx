import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/index';
import Layout from './containers/layout';

const App = () => (
  <Layout />
);

const middleware = [ thunk ];

const store = createStore(rootReducer, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
