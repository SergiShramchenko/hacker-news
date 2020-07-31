import React, { memo } from 'react';
import { useStory } from '../hooks/useStory';

import { mapTime } from '../mappers/mapTime';

import { StoryMetaInfo } from '../elements/StoryMetaInfo';
import { StoryTitleInfo } from '../elements/StoryTitleInfo';

import { StoryWrapper } from '../styles/StoryStyles';

export const Story = memo(function Story({ storyId }) {
  const { story } = useStory(storyId);
  const { by, title, url } = story;

  const time = mapTime(story.time);

  return (
    story &&
    url && (
      <StoryWrapper data-testid='story'>
        <StoryTitleInfo title={title} url={url} />
        <StoryMetaInfo id='story-by' name='By:' meta={by} />
        <StoryMetaInfo id='story-time' name='Posted:' meta={time} />
      </StoryWrapper>
    )
  );
});
