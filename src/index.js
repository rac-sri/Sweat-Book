import React from 'react';
import {Welcome} from './containers';
import {Provider} from 'react-redux';
import {store} from './store';

const Root = () => (
  <Provider store={store}>
    <Welcome />
  </Provider>
);
export default Root;
