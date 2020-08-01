import React from 'react';

import { SearchInput } from '../components/SearchInput';

export const Header = () => (
  <div className='header'>
    <h1>Hacker News Stories</h1>
    <SearchInput />
  </div>
);
