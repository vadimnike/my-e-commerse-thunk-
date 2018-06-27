import './main.css'
import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import Layout from 'containers/Layout';
import Phones from 'containers/Phones';


const store = createStore(reducers,  composeWithDevTools(applyMiddleware(thunk)));


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route component={Phones} path='/'></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);