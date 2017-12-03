import axios from 'axios';
import { push } from 'react-router-redux';
import { getApiUrl } from '../Constants/App';

export function startLoad() {
  return {
    type: '@POSTS/START_LOAD',
  };
}

export function startPush() {
  return {
    type: '@POSTS/START_PUSH',
  };
}

export function addItems(items) {
  return {
    type: '@POSTS/ADD_ITEMS',
    payload: items,
  };
}

export function addItem(item) {
  return {
    type: '@POSTS/ADD_ITEM',
    payload: item,
  };
}

export function removeItem(id) {
  return {
    type: '@POSTS/REMOVE_ITEM',
    payload: id,
  };
}

export function loadItemsError() {
  return {
    type: '@POSTS/LOAD_ERROR',
  };
}

export function pushItemError() {
  return {
    type: '@POSTS/PUSH_ERROR',
  };
}

export function loadItems() {
  return dispatch => {
    dispatch(startLoad());

    axios
      .get(getApiUrl('posts'))
      .then(({ data }) => {
        dispatch(addItems(data));
      })
      .catch(() => {
        dispatch(loadItemsError());
      });
  };
}

export function loadItem(id) {
  return dispatch => {
    dispatch(startLoad());

    axios
      .get(getApiUrl(`posts/${id}`))
      .then(({ data }) => {
        dispatch(addItem(data));
      })
      .catch(() => {
        dispatch(loadItemsError());
      });
  };
}

export function createItem(values) {
  return dispatch => {
    dispatch(startPush());

    axios
      .post(getApiUrl('posts'), values)
      .then(() => {
        dispatch(push('/'));
      })
      .catch(() => {
        dispatch(pushItemError());
      });
  };
}

export function deleteItem(id) {
  return dispatch => {
    dispatch(startPush());

    axios
      .delete(getApiUrl(`posts/${id}`))
      .then(() => {
        dispatch(removeItem(id));
        dispatch(push('/'));
      })
      .catch(() => {
        dispatch(pushItemError());
      });
  };
}
