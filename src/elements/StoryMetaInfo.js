import React from 'react';

import { StoryMeta, StoryMetaElement } from '../styles/StoryStyles';

export const StoryMetaInfo = ({ color, name, id, meta }) => (
  <StoryMeta>
    <span data-testid={id}>
      <StoryMetaElement color={color}>{name}</StoryMetaElement> {meta}
    </span>
  </StoryMeta>
);
