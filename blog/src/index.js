import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import Route from './routes';

const store = createStore(reducers, compose(
      applyMiddleware(promise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
));

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//<Provider store={createStoreWithMiddleware(reducers)}>
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Route} />
  </Provider>
  , document.querySelector('.container'));
