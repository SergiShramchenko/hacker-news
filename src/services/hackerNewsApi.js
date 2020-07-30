import axios from 'axios';

import { selectFields } from '../utils/selectFields';

export const baseUrl = ' https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);
  const dataObj = await result.data;
  const data = selectFields(dataObj);

  return data;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);
  const data = await result.data;

  return data;
};
