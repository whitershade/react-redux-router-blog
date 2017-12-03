import { connect } from 'react-redux';
import Component from '../Components/Post';
import {
  loadItem as LoadPost,
  deleteItem as deletePost,
} from '../Actions/Posts';

function mapStateToProps(
  { posts: { data: posts } },
  { match: { params: { id } } },
) {
  return {
    id,
    post: posts[id],
  };
}

const mapDispatchToProps = dispatch => ({
  LoadPost: id => dispatch(LoadPost(id)),
  deletePost: id => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
