import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes/production/routes';
import configureStore from './store/configureStore';

var store;
var history;
if(true){
	store = configureStore();
	history = syncHistoryWithStore(hashHistory, store);

}else{
	store = configureStore();
	history = syncHistoryWithStore(hashHistory, store);

}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
