import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const StyledDiv = styled.div``;

const Stateless = props => (
  <StyledDiv />
);

Stateless.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stateless;
