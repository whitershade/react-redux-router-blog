import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import store from '../store';

const StyledDiv = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export default class Modal extends PureComponent {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.style.cssText = `
      position: fixed;
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      top: 0;
    `;
    this.modalTarget.onclick = this.customUnmount;

    document.body.appendChild(this.modalTarget);
    this.customRender();
  }

  componentWillUpdate() {
    this.customRender();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  customRender() {
    ReactDOM.render(
      <Provider store={store}>
        <StyledDiv>{this.props.children}</StyledDiv>
      </Provider>,
      this.modalTarget,
    );
  }

  customUnmount() {
    console.log(this.modalTarget);
  }

  render() {
    return <noscript />;
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};
