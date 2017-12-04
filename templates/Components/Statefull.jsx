import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div``;

export default class Statefull extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { id, foo } = this.props;

    if (id) foo(id);
  }

  render() {
    return <StyledDiv />;
  }
}

Statefull.propTypes = {
  props: PropTypes.object.isRequired,
};
