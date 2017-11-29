import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div``;

export default class Post extends PureComponent {
  componentDidMount() {
    const { id, LoadPost } = this.props;

    LoadPost(id);
  }

  render() {
    const { post: { title, categories, content } } = this.props;

    return (
      <StyledDiv>
        <h2>{title}</h2>
        <p>{categories}</p>
        <p>{content}</p>
      </StyledDiv>
    );
  }
}

Post.propTypes = {
  props: PropTypes.object.isRequired,
};
