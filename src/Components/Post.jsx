import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div``;

export default class Post extends PureComponent {
  constructor() {
    super();

    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  componentDidMount() {
    const { id, post, LoadPost } = this.props;

    if (!post) LoadPost(id);
  }

  onDeleteButtonClick() {
    const { id, deletePost } = this.props;

    deletePost(id);
  }

  render() {
    const { post } = this.props;

    return post ? (
      <StyledDiv>
        <h2>{post.title}</h2>
        <p>{post.categories}</p>
        <p>{post.content}</p>
        <button onClick={this.onDeleteButtonClick}>Delete post</button>
      </StyledDiv>
    ) : (
      'Loading...'
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  id: PropTypes.string.isRequired,
  LoadPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

Post.defaultProps = {
  post: null,
};
