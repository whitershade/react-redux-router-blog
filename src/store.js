import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers';

export const history = createBrowserHistory();
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

let composedEnhancers;

if (process.env.NODE_ENV === 'production') {
  composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
} else {
  composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers,
  );
}

const store = createStore(reducers, composedEnhancers);

export default store;
