import { combineReducers } from 'redux';

import { storiesReducer } from './stories/stories.reducer';

export const rootReducer = combineReducers({
  stories: storiesReducer,
});
