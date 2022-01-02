import { Map, Marker, Popup } from 'mapbox-gl';
import { useEffect, useReducer } from 'react';
import { getCurrentLocation } from '../../helpers/getCurrentLocation';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';

export interface MapState {
  isLoading: boolean;
  userLocation?: [number, number];
  map?: Map;
  prevMarker?: Marker;
}

const INITIAL_STATE: MapState = {
  isLoading: true,
  userLocation: undefined,
  map: undefined,
  prevMarker: undefined,
};

interface MapProps {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: MapProps) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  useEffect(() => {
    getCurrentLocation().then((lngLat) =>
      dispatch({ type: 'setUserLocation', payload: lngLat })
    );
  }, []);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setText('Hello, from my location');

    new Marker()
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: 'setMap', payload: map });
  };

  const setNewLocation = (lngLat: [number, number]) => {
    state.prevMarker?.remove();

    state.map?.flyTo({
      center: lngLat,
      zoom: 14,
    });

    const prevMarker = new Marker().setLngLat(lngLat).addTo(state.map!);
    dispatch({ type: 'setMarker', payload: prevMarker });
  };

  return (
    <MapContext.Provider value={{ ...state, setMap, setNewLocation }}>
      {children}
    </MapContext.Provider>
  );
};
