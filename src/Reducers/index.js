import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import posts from './Posts';

const appReducer = combineReducers({
  routing,
  form,
  posts,
});

export default appReducer;
