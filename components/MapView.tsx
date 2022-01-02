import { useContext, useEffect, useRef, useState } from 'react';
import { Map } from 'mapbox-gl';
import { MapContext } from '../context/map/MapContext';

export const MapView = () => {
  const { isLoading, userLocation, setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });

      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return <div ref={mapDiv} className='h-screen w-screen bg-slate-600' />;
};
