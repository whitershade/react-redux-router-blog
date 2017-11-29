import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const required = value => (value ? undefined : 'Required');

const renderInput = ({ input, meta: { error, touched } }) => (
  <div>
    <label htmlFor={input.name}>
      {capitalizeFirstLetter(input.name)}
      <input id={input.name} type="text" {...input} />
      {touched && error ? <span>{error}</span> : null}
    </label>
  </div>
);

const NewPostForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={renderInput} validate={required} />
    <Field name="categories" component={renderInput} validate={required} />
    <Field name="content" component={renderInput} validate={required} />
    <button>Submit</button>
    <Link to="/posts" href="/posts">
      Cancel
    </Link>
  </form>
);

export default NewPostForm;
