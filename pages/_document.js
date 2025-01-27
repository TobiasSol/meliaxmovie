// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self'; 
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://a.exdynsrv.com; 
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
            font-src 'self' https://fonts.gstatic.com; 
            img-src 'self' data: https://www.meliax-porn.de; 
            media-src 'self' https://www.meliax-porn.de; 
            connect-src 'self'; 
            frame-src 'self';
          "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}