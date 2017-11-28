import React from 'react';
import { Field } from 'redux-form';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function validate(value) {
  const errors = {};

  return errors;
}

const renderInput = ({ input }) => (
  <label htmlFor={input.name}>
    {capitalizeFirstLetter(input.name)}
    <input id={input.name} type="text" {...input} />
  </label>
);

const NewPostForm = () => (
  <form>
    <Field name="title" component={renderInput} />
    <Field name="tags" component={renderInput} />
    <Field name="content" component={renderInput} />
    <button>Submit</button>
  </form>
);

export default NewPostForm;
