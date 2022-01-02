import { Map } from 'mapbox-gl';
import { MapState } from './MapProvider';

type MapActions =
  | { type: 'setUserLocation'; payload: [number, number] }
  | { type: 'setMap'; payload: Map };

export const mapReducer = (state: MapState, action: MapActions) => {
  switch (action.type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload,
      };

    case 'setMap':
      return {
        ...state,
        map: action.payload,
      };

    default:
      return state;
  }
};
