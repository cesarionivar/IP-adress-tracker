import type { NextPage } from 'next';
import Head from 'next/head';
import { MapView } from '../components/MapView';

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

      <MapView />
    </div>
  );
};

export default Home;
