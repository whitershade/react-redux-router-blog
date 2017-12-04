import React from 'react';

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const renderInput = ({ input, meta: { error, touched } }) => (
  <div>
    <label htmlFor={input.name}>
      {capitalizeFirstLetter(input.name)}
      <input id={input.name} type="text" {...input} />
      {touched && error ? <span>{error}</span> : null}
    </label>
  </div>
);

export default renderInput;
