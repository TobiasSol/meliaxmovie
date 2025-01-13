import '../styles/globals.css';
import FontProvider from '../components/FontProvider';
import AgeVerificationPreloader from '../components/AgeVerificationPreloader';
import AdChatBanner from '../components/AdChatBanner';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FontProvider>
        <AgeVerificationPreloader />
        <Component {...pageProps} />
        <AdChatBanner />
      </FontProvider>
    </>
  );
}

export default MyApp;