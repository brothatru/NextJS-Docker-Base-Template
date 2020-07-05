import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anonymous+Pro:wght@400;700&family=Bebas+Neue&family=Lato:wght@300&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              margin: 0px;
            }
          `}
        </style>
      </Html>
    );
  }
}

export default MyDocument;
