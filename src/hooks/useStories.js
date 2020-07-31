import { useState, useEffect } from 'react';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { getStoryIds } from '../services/hackerNewsApi';

export const useStories = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return {
    count,
    storyIds,
  };
};
