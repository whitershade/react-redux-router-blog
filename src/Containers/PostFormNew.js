import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createItem as createPost } from '../Actions/Posts';
import Component from '../Components/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(createPost(values)),
});

export default connect(null, mapDispatchToProps)(
  reduxForm({ form: 'post' })(Component),
);
