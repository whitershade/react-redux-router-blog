import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import PostsComponent from '../Containers/Posts';
import Post from '../Containers/Post';
import PostFormNew from '../Containers/PostFormNew';
import PostFormEdit from '../Containers/PostFormEdit';

const NoMatch = () => <div>404</div>;

export default (
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
          <Route path="/posts/new" component={PostFormNew} />
          <Route path="/posts/:id/edit" component={PostFormEdit} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/posts" component={PostsComponent} />
          <Route path="/" component={PostsComponent} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
