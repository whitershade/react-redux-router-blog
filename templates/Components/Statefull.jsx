import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div``;

export default class Statefull extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <StyledDiv />;
  }
}

Statefull.propTypes = {
  props: PropTypes.object.isRequired,
};
