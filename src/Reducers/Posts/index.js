import { mapKeys, omit } from 'lodash';

const initialState = {
  data: {},
  isLoading: false,
  isPushing: false,
};

const PostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@POSTS/START_LOAD':
      return Object.assign({}, state, { isLoading: true });

    case '@POSTS/START_PUSH':
      return Object.assign({}, state, { isPushing: true });

    case '@POSTS/ADD_ITEMS':
      return Object.assign({}, state, {
        data: mapKeys(payload, 'id'),
        isLoading: false,
      });

    case '@POSTS/REMOVE_ITEM':
      return Object.assign({}, state, {
        data: omit(state.data, payload),
        isPushing: false,
      });

    case '@POSTS/ADD_ITEM': {
      return Object.assign({}, state, {
        data: { ...state.data, [payload.id]: payload },
        isLoading: false,
      });
    }

    case '@POSTS/EDIT_ITEM': {
      return Object.assign({}, state, {
        data: {
          ...state.data,
          [payload.id]: Object.assign({}, state.data[payload.id], payload),
        },
        isPushing: false,
      });
    }

    default:
      return state;
  }
};

export default PostsReducer;
