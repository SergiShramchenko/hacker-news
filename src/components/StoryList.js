import React from 'react';

import { Story } from './Story';

export const StoryList = ({ storyIds, count }) =>
  storyIds
    .slice(0, count)
    .map((storyId) => <Story key={storyId} storyId={storyId} />);
