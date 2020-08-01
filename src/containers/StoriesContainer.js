import React from 'react';
import { useStories } from '../hooks/useStories';

import { Header } from '../components/Header';
import { StoryList } from '../components/StoryList';

import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
  const { count, storyIds } = useStories();
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id='stories-container'>
        <Header />
        <StoryList storyIds={storyIds} count={count} />
      </StoriesContainerWrapper>
    </>
  );
};
