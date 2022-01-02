import { useRef } from 'react';

export const SearchBar = () => {
  const debounce = useRef<NodeJS.Timeout>();

  const handleChange = () => {
    if (debounce.current) clearTimeout(debounce.current);

    debounce.current = setTimeout(() => {
      // TODO: implement a debounce to make request to https://geo.ipify.org/
    }, 1000);
  };

  return (
    <input
      type='text'
      className='fixed top-3 m-2 sm:m-0 sm:left-1/3 p-3 z-50 w-72  md:w-1/3  bg-white shadow-xl rounded '
      placeholder='Search for any IP address or domain'
      onChange={handleChange}
    />
  );
};
