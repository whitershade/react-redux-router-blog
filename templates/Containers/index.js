import { connect } from 'react-redux';
import Component from '../Components/Component';
import { loadItems } from '../Actions/Action';

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
