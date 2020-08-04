import axios from 'axios';

import {
  START_LOADING,
  STOP_LOADING,
  CATCH_ERROR,
  FETCH_STORY,
  FETCH_STORIES,
} from './stories.types';

import { selectFields } from '../../utils/selectFields';
import { newStoriesUrl, storyUrl } from '../../constants';

export const startLoading = () => ({
  type: START_LOADING,
});
export const stopLoading = () => ({
  type: STOP_LOADING,
});
export const catchError = () => ({
  type: CATCH_ERROR,
});

export const getStory = (storyId) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const result = await axios.get(`${storyUrl + storyId}.json`);
    const dataObj = await result.data;
    const story = selectFields(dataObj);

    dispatch({ type: FETCH_STORY, payload: story });
    dispatch(stopLoading());
  } catch (error) {
    dispatch(catchError());
  }
};

// export const getStory = async (storyId) => {
//   const result = await axios.get(`${storyUrl + storyId}.json`);
//   const dataObj = await result.data;

//   return selectFields(dataObj);
// };

export const getStoryIds = () => async (dispatch) => {
  try {
    dispatch(startLoading());

    const result = await axios.get(newStoriesUrl);
    const stories = await result.data;

    dispatch({ type: FETCH_STORIES, payload: stories });
    dispatch(stopLoading());
  } catch (error) {
    dispatch(catchError());
  }
};
