import {createStore} from 'redux';

import rootReducer from '../reducers';

function configureStore(initialState) {

   const store = createStore(rootReducer, initialState);
      if (module.hot) {
          // Enable Webpack hot module replacement for reducers
          module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
          });
      }

      return store;
  }

export default configureStore;
