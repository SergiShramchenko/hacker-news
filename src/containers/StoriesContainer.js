import React from 'react';
import { useStories } from '../hooks/useStories';

import { Header } from '../components/Header';
import { Options } from '../components/Options';
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
        <Options />
        <StoryList storyIds={storyIds} count={count} />
      </StoriesContainerWrapper>
    </>
  );
};
