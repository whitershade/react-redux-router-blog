import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import Input from './Input';

export default class PostForm extends PureComponent {
  static required(value) {
    return value ? undefined : 'Required';
  }

  componentWillMount() {
    const { id, post, LoadPost } = this.props;

    if (id && !post) LoadPost(id);
  }

  render() {
    const { constructor: { required }, props: { handleSubmit, id } } = this;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="title" component={Input} validate={required} />
        <Field name="categories" component={Input} validate={required} />
        <Field name="content" component={Input} validate={required} />
        <button>Submit</button>
        <Link
          to={id ? `/posts/${id}` : '/posts'}
          href={id ? `/posts/${id}` : '/posts'}
        >
          Cancel
        </Link>
      </form>
    );
  }
}

PostForm.propTypes = {
  props: PropTypes.object.isRequired,
};
