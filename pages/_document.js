import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/next-app/manifest.json" />
          <link rel="apple-touch-icon" href="/next-app/icon.png"></link>
          <meta content='yes' name='apple-mobile-web-app-capable'/>
          <meta content='yes' name='mobile-web-app-capable'/>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;