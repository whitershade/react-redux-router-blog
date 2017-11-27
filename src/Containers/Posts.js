import { connect } from 'react-redux';
import Component from '../Components/Posts';
import { loadItems } from '../Actions/Posts';

function mapStateToProps(state) {
  return {
    posts: state.posts.data,
  };
}

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
