import axios from 'axios';
import {
  getStoryIds,
  getStory,
  storyUrl,
  newStoriesUrl,
} from '../services/hackerNewsApi';

import { emptyStory, storyIds, singularStory } from '../fixtures/index';

jest.mock('axios');

describe('Hacker News Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getStory functionality', () => {
    it('request and gets a story from the Hacker News Api', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: { ...singularStory } })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(singularStory);
    });

    it('does not retrieve a story from the Api, but handles gracefully', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(emptySingularStory);
    });

    describe('getStoryIds', () => {
      it('request and gets a story ids the Hacker News Api', async () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

        const entity = await getStoryIds();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(newStoriesUrl);
        expect(entity).toEqual(storyIds);
      });
    });
  });
});
