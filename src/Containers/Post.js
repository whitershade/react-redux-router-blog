import { connect } from 'react-redux';
import { last } from 'lodash';
import Component from '../Components/Post';
import { loadItem as LoadPost } from '../Actions/Posts';

function mapStateToProps(
  { posts: { data: posts } },
  { location: { pathname } },
) {
  const id = last(pathname.split('/'));

  return {
    id,
    post: posts[id] || {},
  };
}

const mapDispatchToProps = dispatch => ({
  LoadPost: id => dispatch(LoadPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
