import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <title>TS&P</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
