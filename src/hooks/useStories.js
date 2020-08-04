import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { getStoryIds } from '../redux/stories/stories.actions';

export const useStories = () => {
  const { count } = useInfiniteScroll();

  const storyIds = useSelector(({ stories }) => stories.storyIds);

  const dispatch = useDispatch();
  const fetchStories = () => dispatch(getStoryIds());

  useEffect(() => {
    fetchStories();
  }, []);

  return {
    count,
    storyIds,
  };
};
