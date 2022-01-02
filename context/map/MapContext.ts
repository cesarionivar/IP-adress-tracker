import { createContext } from 'react';
import { Map } from 'mapbox-gl';

export interface MapProps {
  isLoading: boolean;
  userLocation?: [number, number];
  map?: Map;

  setMap: (map: Map) => void;
  setNewLocation: (lngLat: [number, number]) => void;
}

export const MapContext = createContext({} as MapProps);
