/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default class App extends PureComponent {
  render() {
    return <div>App</div>;
  }
}

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
