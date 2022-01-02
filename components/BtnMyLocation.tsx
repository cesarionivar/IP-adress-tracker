import { useContext } from 'react';
import { MapContext } from '../context/map/MapContext';

export const BtnMyLocation = () => {
  const { map, prevMarker, userLocation } = useContext(MapContext);

  const handleClick = () => {
    prevMarker?.remove();
    map?.flyTo({
      center: userLocation,
      zoom: 15,
    });
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className='fixed bottom-7 right-6 px-3 py-1 border-none text-white rounded hover:bg-cyan-700 cursor-pointer bg-cyan-600'
      >
        My Location
      </button>
    </div>
  );
};
