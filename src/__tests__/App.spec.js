import React from 'react';
import { act } from 'react-dom/test-utils';
import { App } from '../App';
import {
  render,
  cleanup,
  waitForElement,
  getByTestId,
} from '@testing-library/react';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hackerNewsApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hackerNewsApi.js', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test('render tha application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));

  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, queryByTestId } = render(<App />);
    await waitForElement(() => [
      expect(getByText('Hacker News Stories')).toBeTruthy(),
      expect(getByText('Developer create a new product')).toBeTruthy(),
      expect(queryByTestId('story-by').textContent).toEqual('By: John Doe'),
    ]);
  });
});
