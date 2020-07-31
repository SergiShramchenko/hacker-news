import axios from 'axios';

import { selectFields } from '../utils/selectFields';
import { newStoriesUrl, storyUrl } from '../constants';

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);
  const dataObj = await result.data;

  return selectFields(dataObj);
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);
  const data = await result.data;

  return data;
};
