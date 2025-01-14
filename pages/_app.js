import '../styles/globals.css';
import FontProvider from '../components/FontProvider';
import AgeVerificationPreloader from '../components/AgeVerificationPreloader';
import AdChatBanner from '../components/AdChatBanner';
import Head from 'next/head';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FontProvider>
        <AgeVerificationPreloader />
        <Component {...pageProps} />
        <AdChatBanner />
      </FontProvider>
      <Footer />
    </div>
  );
}

export default MyApp;