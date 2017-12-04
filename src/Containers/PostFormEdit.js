import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { pathItem as editPost, loadItem as LoadPost } from '../Actions/Posts';
import Component from '../Components/PostForm';

function mapStateToProps(
  { posts: { data: posts } },
  { match: { params: { id } } },
) {
  return {
    id,
    initialValues: posts[id],
  };
}

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(editPost(values)),
  LoadPost: id => dispatch(LoadPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'post' })(Component),
);
