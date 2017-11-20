import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  opacity: ${props => (props.isPreloaderHidding ? '.25' : '1')};
  transition: opacity 0.3s ease;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px auto;
  background-color: blue;

  border-radius: 100%;
  animation: sk-scaleout 1s infinite ease-in-out;

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default class Preloader extends Component {
  constructor(props) {
    super(props);

    this.state = { isPreloaderHidding: false };
  }

  componentWillReceiveProps({ isPreloaderHidding }) {
    this.setState({ isPreloaderHidding });
  }

  render() {
    return (
      <StyledDiv isPreloaderHidding={this.state.isPreloaderHidding}>
        <Spinner />
      </StyledDiv>
    );
  }
}

Preloader.propTypes = {
  isPreloaderHidding: PropTypes.bool.isRequired,
};
