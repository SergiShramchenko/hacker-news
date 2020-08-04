import {
  START_LOADING,
  STOP_LOADING,
  CATCH_ERROR,
  FETCH_STORIES,
  FETCH_STORY,
} from './stories.types';

const initialState = {
  storyIds: [],
  story: [],
  loading: false,
  error: false,
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CATCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FETCH_STORY:
      return {
        ...state,
        story: action.payload,
      };
    case FETCH_STORIES:
      return {
        ...state,
        storyIds: action.payload,
      };

    default:
      return state;
  }
};
