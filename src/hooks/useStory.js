import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getStory } from '../redux/stories/stories.actions';

export const useStory = (storyId) => {
  const story = useSelector((state) => state.stories.story);

  const dispatch = useDispatch();
  const fetchStory = (storyId) => dispatch(getStory(storyId));

  useEffect(() => {
    fetchStory(storyId);
  }, []);

  return {
    story,
  };
};
