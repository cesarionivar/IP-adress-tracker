import { Marker } from 'mapbox-gl';
import { ChangeEvent, useContext, useRef } from 'react';
import { clientAxios } from '../config/clientAxios';
import { MapContext } from '../context/map/MapContext';

export const SearchBar = () => {
  const debounce = useRef<NodeJS.Timeout>();
  const { setNewLocation } = useContext(MapContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    if (!term) return null;
    if (debounce.current) clearTimeout(debounce.current);

    let isDomain = term.match(/\./g)?.length === 1;
    let param = isDomain ? 'domain' : 'ipAddress';

    debounce.current = setTimeout(() => {
      clientAxios
        .get(`/country,city?${param}=${term}`)
        .then((res) => {
          const lngLat: [number, number] = [
            res.data.location.lng,
            res.data.location.lat,
          ];

          setNewLocation(lngLat);
        })
        .catch((err) => {
          alert(param + ' not found');
        });

      e.target.value = '';
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
