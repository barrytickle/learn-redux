import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './reducers';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//ACTION -> DESCRIBES WHAT YOU WANT TO DO

//REDUCER -> DESCRIBE HOW YOUR ACTIONS TRANSFORM YOUR STATE INTO THE NEXT STATE

//STORE -> GLOBALIZED STATE

//DISPATCH -> WHERE YOU CAN EXECUTE THAT ACTION

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

