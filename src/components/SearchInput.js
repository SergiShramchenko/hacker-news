import React from 'react';

export const SearchInput = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      className='search-title'
      type='text'
      placeholder='search'
      onChange={handleChange}
    />
  );
};
