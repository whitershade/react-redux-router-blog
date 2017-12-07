import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal';

const StyledDiv = styled.div``;

export default class Post extends PureComponent {
  constructor() {
    super();
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.changeModalState = this.changeModalState.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  componentWillMount() {
    const { id, post, LoadPost } = this.props;

    if (!post) LoadPost(id);
  }

  onDeleteButtonClick() {
    const { id, deletePost } = this.props;

    deletePost(id);
  }

  changeModalState() {
    const { isModalOpen } = this.state;

    this.setState({ isModalOpen: !isModalOpen });
  }

  render() {
    const { props: { post }, state: { isModalOpen } } = this;

    return post ? (
      <StyledDiv>
        <h2>{post.title}</h2>
        <p>{post.categories}</p>
        <p>{post.content}</p>
        <button onClick={this.changeModalState}>Delete post</button>
        <Link href={`/posts/${post.id}/edit`} to={`/posts/${post.id}/edit`}>
          Edit
        </Link>
        {isModalOpen && (
          <Modal>
            <p>Are you shure?</p>
            <button onClick={this.onDeleteButtonClick}>Delete post</button>
            <button onClick={this.changeModalState}>Cancel</button>
          </Modal>
        )}
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
