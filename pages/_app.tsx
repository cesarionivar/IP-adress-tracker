import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapProvider } from '../context/map/MapProvider';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2VzYXJpb25pdmFyIiwiYSI6ImNreHNha2JvcjM5aHEyb3F3YXY1OWNmb2wifQ.YLXA39FWiMhEXxxG4Qj7Xg';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!navigator.geolocation) {
      alert('Geolocation is not available');
      throw new Error('Geolocation is not available');
    }
  }, []);

  return (
    <MapProvider>
      <Component {...pageProps} />
    </MapProvider>
  );
}

export default MyApp;
