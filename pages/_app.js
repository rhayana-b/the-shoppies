import '../utils/css/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shoppies</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
