import { useState, useEffect } from 'react';

import { getStory } from '../services/hackerNewsApi';

export const useStory = (storyId) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return {
    story,
  };
};
