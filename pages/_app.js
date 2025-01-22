import '../styles/globals.css';
import FontProvider from '../components/FontProvider';
import AdChatBanner from '../components/AdChatBanner';
import Head from 'next/head';
import Footer from '../components/Footer';
import { PopupProvider } from '../contexts/PopupContext';
import OfferPopup from '../components/OfferPopup';

function MyApp({ Component, pageProps }) {
  return (
    <PopupProvider>
      <div className="flex flex-col min-h-screen">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <FontProvider>
          <Component {...pageProps} />
          <AdChatBanner />
        </FontProvider>
        <Footer />
        <OfferPopup />
      </div>
    </PopupProvider>
  );
}

export default MyApp;