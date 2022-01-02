import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapProvider } from '../context/map/MapProvider';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

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
