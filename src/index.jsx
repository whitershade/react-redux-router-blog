/* eslint-disable react/no-render-return-value */
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Posts from './Containers/Posts';
import reducers from './Reducers';

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

const store = createStore(reducers, enhancer);
const history = syncHistoryWithStore(createBrowserHistory(), store);

const Hello = () => <div>Hello!</div>;
const Goodbye = () => <div>Goodbye!</div>;
const NoMatch = () => <div>404</div>;

const render = RootComponent =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={RootComponent} />
            <Route path="/hello" component={Hello} />
            <Route path="/goodbye" component={Goodbye} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Provider>
    </AppContainer>,
    document.querySelector('.app'),
  );

render(Posts);

if (module.hot) module.hot.accept('./Components/App', () => render(Posts));
