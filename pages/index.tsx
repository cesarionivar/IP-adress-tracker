import type { NextPage } from 'next';
import Head from 'next/head';
import { BtnMyLocation } from '../components/BtnMyLocation';
import { MapView } from '../components/MapView';
import { SearchBar } from '../components/SearchBar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>IP Address Tracker</title>
        <meta
          name='description'
          content='Track whatever IP address with IP Address Tracker App'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SearchBar />
      <MapView />
      <BtnMyLocation />
    </div>
  );
};

export default Home;
