import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles.css';

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledLi = styled.li`
  color: white;
  background-color: white;
`;

export default class Posts extends PureComponent {
  componentWillMount() {
    this.props.loadItems();
  }

  render() {
    const { posts, isLoading } = this.props;

    return !isLoading ? (
      <div>
        <StyledUl>
          {map(posts, ({ id, title }) => (
            <StyledLi key={id}>
              <Link to={`/posts/${id}`} href={`/posts/${id}`}>
                {title || 'without title'}
              </Link>
            </StyledLi>
          ))}
        </StyledUl>
      </div>
    ) : null;
  }
}

Posts.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadItems: PropTypes.func.isRequired,
  posts: PropTypes.objectOf(PropTypes.object).isRequired,
};
