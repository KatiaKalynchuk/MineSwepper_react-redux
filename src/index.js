import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(()=> {
})

render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NewRoot = require('./containers/App').default;
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById('app')
    );
  });
}
