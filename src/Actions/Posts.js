import firebase from 'firebase';
import { push } from 'react-router-redux';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBEZ3LoV1ahLBhScuYfpFz4VX2-tLd-rtI',
  authDomain: 'udemy-react-redux-router-blog.firebaseapp.com',
  databaseURL: 'https://udemy-react-redux-router-blog.firebaseio.com',
  projectId: 'udemy-react-redux-router-blog',
  storageBucket: 'udemy-react-redux-router-blog.appspot.com',
  messagingSenderId: '892247790256',
};

firebase.initializeApp(config);
const database = firebase.database();

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

export function editItem(item) {
  return {
    type: '@POSTS/EDIT_ITEM',
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
    database.ref('posts/').on('value', snapshot => {
      dispatch(addItems(snapshot.val()));
    });
  };
}

export function loadItem(id) {
  return dispatch => {
    dispatch(startLoad());

    firebase
      .database()
      .ref(`posts/${id}`)
      .once('value')
      .then(snapshot => {
        dispatch(addItem(snapshot.val()));
      });
  };
}

export function createItem(values) {
  return dispatch => {
    const id = String(Date.now());

    database
      .ref(`posts/${id}`)
      .set({ id, ...values })
      .then(() => {
        dispatch(addItem({ id, ...values }));
        dispatch(push('/'));
      });
  };
}

export function deleteItem(id) {
  return dispatch => {
    dispatch(startPush());

    database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removeItem(id));
        dispatch(push('/'));
      });
  };
}

export function pathItem(values) {
  return dispatch => {
    dispatch(startPush());

    database
      .ref(`posts/${values.id}`)
      .update(values)
      .then(() => {
        dispatch(editItem(values));
        dispatch(push(`/posts/${values.id}`));
      });
  };
}
