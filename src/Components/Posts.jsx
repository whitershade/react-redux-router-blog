import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import styled from 'styled-components';

const StyledUl = styled.ul``;

export default class Posts extends PureComponent {
  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    const { posts } = this.props;

    return (
      <StyledUl>
        {map(posts, ({ id, title }) => (
          <li key={id}>{title || 'without title'}</li>
        ))}
      </StyledUl>
    );
  }
}

Posts.propTypes = {
  loadItems: PropTypes.func.isRequired,
  posts: PropTypes.objectOf(PropTypes.object).isRequired,
};
