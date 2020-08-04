import React from 'react';

import { StoryTitle } from '../styles/StoryStyles';

export const StoryTitleInfo = ({ title, url }) => (
  <StoryTitle>
    <a href={url} target='_blank' rel='noopener noreferrer'>
      {title}
    </a>
  </StoryTitle>
);
