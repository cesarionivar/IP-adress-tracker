import { createContext } from 'react';
import { Map } from 'mapbox-gl';

export interface MapProps {
  isLoading: boolean;
  userLocation?: [number, number];
  map?: Map;

  setMap: (map: Map) => void;
}

export const MapContext = createContext({} as MapProps);
