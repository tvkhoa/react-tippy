import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const enhancers = [
  applyMiddleware(
    thunk,
  ),
  // Redux Dev Tools store enhancer.
  // @see https://github.com/zalmoxisus/redux-devtools-extension
  // We only want this enhancer enabled for development and when in a browser
  // with the extension installed.
  typeof window !== 'undefined'
    && typeof window.devToolsExtension !== 'undefined'
    // Call the brower extension function to create the enhancer.
    ? window.devToolsExtension()
    // Else we return a no-op function.
    : f => f,
];

export const configureStore = (initialState) => {
  const store = initialState
    ? createReduxStore(rootReducer, initialState, compose(...enhancers))
    : createReduxStore(rootReducer, compose(...enhancers));

  // Enable Webpack hot module replacement for reducers. This is so that we
  // don't lose all of our current application state during hot reloading.

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require, import/newline-after-import
      const nextReducer = require('./rootReducer').rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

const store = configureStore();

export default store;
