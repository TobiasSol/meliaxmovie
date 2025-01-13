import '../styles/globals.css';
import FontProvider from '../components/FontProvider';
import AgeVerificationPreloader from '../components/AgeVerificationPreloader';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <FontProvider>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MeliaX",
              "url": "https://meliax-porn.de",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://meliax-porn.de/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-B23M77814R"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B23M77814R');
            `
          }}
        />
      </Head>
      <AgeVerificationPreloader />
      <Component {...pageProps} />
    </FontProvider>
  );
}

export default MyApp;