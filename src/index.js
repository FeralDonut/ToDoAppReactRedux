import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import triage from './Redux/reducers';
import App from './App';

const store = createStore(
  triage,
  // eslint-disable-next-line no-underscore-dangle, no-undef
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// eslint-disable-next-line no-undef
render(<Index />, document.getElementById('index'));
