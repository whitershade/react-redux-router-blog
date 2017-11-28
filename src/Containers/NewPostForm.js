import { reduxForm } from 'redux-form';
import Component from '../Components/NewPostForm';

export default reduxForm({ form: 'newPost' })(Component);
