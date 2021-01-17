import '../utils/css/tailwind.css';

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
