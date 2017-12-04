import reducer from './index';

describe('posts reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      data: {},
      isLoading: false,
      isPushing: false,
    };

    const action = undefined;

    expect(reducer(action, initialState)).toEqual(initialState);
  });

  it('should handle @POSTS/ADD_ITEMS', () => {
    const initialState = {
      data: {},
      isLoading: true,
      isPushing: false,
    };

    const action = {
      type: '@POSTS/ADD_ITEMS',
      payload: [{ id: 1 }, { id: 2 }],
    };

    const expectedState = {
      data: { 1: { id: 1 }, 2: { id: 2 } },
      isLoading: false,
      isPushing: false,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle @POSTS/REMOVE_ITEM', () => {
    const initialState = {
      data: { 1: { id: 1 }, 2: { id: 2 } },
      isLoading: false,
      isPushing: true,
    };

    const action = {
      type: '@POSTS/REMOVE_ITEM',
      payload: 1,
    };

    const expectedState = {
      data: { 2: { id: 2 } },
      isLoading: false,
      isPushing: false,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle @POSTS/ADD_ITEM', () => {
    const initialState = {
      data: { 1: { id: 1 }, 2: { id: 2 } },
      isLoading: true,
      isPushing: false,
    };

    const action = {
      type: '@POSTS/ADD_ITEM',
      payload: { id: 3 },
    };

    const expectedState = {
      data: { 1: { id: 1 }, 2: { id: 2 }, 3: { id: 3 } },
      isLoading: false,
      isPushing: false,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle @POSTS/EDIT_ITEM', () => {
    const initialState = {
      data: {
        1: { id: 1, attributeToChange: 'default', anotherAttribute: 'default' },
        2: { id: 2, attributeToChange: 'default', anotherAttribute: 'default' },
      },
      isLoading: false,
      isPushing: true,
    };

    const action = {
      type: '@POSTS/EDIT_ITEM',
      payload: { id: 2, attributeToChange: 'changed' },
    };

    const expectedState = {
      data: {
        1: { id: 1, attributeToChange: 'default', anotherAttribute: 'default' },
        2: { id: 2, attributeToChange: 'changed', anotherAttribute: 'default' },
      },
      isLoading: false,
      isPushing: false,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
