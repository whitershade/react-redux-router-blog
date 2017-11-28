/* eslint-disable react/no-render-return-value */
import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store, { history } from './store';
import PostsComponent from './Containers/Posts';
import NewPostForm from './Containers/NewPostForm';

const NoMatch = () => <div>404</div>;

const render = Posts =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Link href="/" to="/">
              Home
            </Link>
            <Link href="/posts/new" to="/posts/new">
              New post
            </Link>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts" component={Posts} />
              <Route path="/posts/new" component={NewPostForm} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    document.querySelector('.app'),
  );

render(PostsComponent);

if (module.hot)
  module.hot.accept('./Components/App', () => render(PostsComponent));
