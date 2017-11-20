/* eslint-disable react/no-render-return-value */
import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './Containers/App';
import reducer from './Reducers';

let enhancer;
// eslint-disable-next-line no-underscore-dangle
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  // eslint-disable-next-line no-underscore-dangle
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(thunk),
  );
} else {
  enhancer = compose(applyMiddleware(thunk));
}

const store = createStore(
  combineReducers({
    reducer,
    enhancer,
    routing: routerReducer, // Add the reducer to your store on the `routing` key
  }),
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

const Hello = () => <div>Hello!</div>;
const Goodbye = () => <div>Goodbye!</div>;
const NoMatch = () => <div>404</div>;

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <div>
            <div>What's up?</div>
            <Switch>
              <Route exact path="/" component={Component} />
              <Route path="/hello" component={Hello} />
              <Route path="/goodbye" component={Goodbye} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    document.querySelector('.app'),
  );

render(App);

if (module.hot) module.hot.accept('./Components/App', () => render(App));
