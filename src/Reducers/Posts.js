import { mapKeys } from 'lodash';

const initialState = {
  data: {},
  isLoading: false,
};

const Posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@POSTS/START_LOAD_ITEMS':
      return Object.assign({}, state, { isLoading: true });

    case '@POSTS/ADD_ITEMS':
      return Object.assign({}, state, {
        data: mapKeys(payload, 'id'),
        isLoading: false,
      });

    default:
      return state;
  }
};

export default Posts;
