import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import rootReducer from './reducers/rootReducer'

const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <App />
    </ Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


