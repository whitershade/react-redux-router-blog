import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './Posts';

const appReducer = combineReducers({
  routing: routerReducer, // Add the reducer to your store on the `routing` key
  posts,
});

export default appReducer;
