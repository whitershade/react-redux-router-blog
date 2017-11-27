import axios from 'axios';
import { apiUrl } from '../Constants/App';

export function startLoadItems() {
  return {
    type: '@POSTS/START_LOAD_ITEMS',
  };
}

export function addItems(items) {
  return {
    type: '@POSTS/ADD_ITEMS',
    payload: items,
  };
}

export function loadItemsError() {
  return {
    type: '@POSTS/LOAD_ITEMS_ERROR',
  };
}

export function loadItems() {
  return dispatch => {
    dispatch(startLoadItems());

    axios
      .get(apiUrl('posts'))
      .then(({ data }) => {
        dispatch(addItems(data));
      })
      .catch(() => {
        dispatch(loadItemsError());
      });
  };
}
