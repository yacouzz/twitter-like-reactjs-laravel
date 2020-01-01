import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App'
//import axios from 'axios';
import {Provider} from 'react-redux';
import {store, persist} from '../components/src/redux/store';
import persistGate  from 'redux-persist/integration/react'

if (document.getElementById('example')) {

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <persistGate persistor={persist}>
          <App />
        </persistGate>
      </BrowserRouter>
    </Provider>

  , document.getElementById('example'));
}
