import { connect } from 'react-redux';
import Component from '../Components/Posts';
import { loadItems } from '../Actions/Posts';

function mapStateToProps({ posts: { data: posts, isLoading } }) {
  return {
    posts,
    isLoading,
  };
}

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
