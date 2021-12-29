import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx)
  }

  render() {
    const description = '煩悩を消し去って新年を迎えよう！'
    return (
      <Html lang="ja-JP" dir="ltr">
        <Head>
          <title>煩悩撲滅アプリ</title>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
          {/* windows */}
          <meta name="msapplication-square70x70logo" content="/site-tile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/site-tile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="/site-tile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="/site-tile-310x310.png" />
          <meta name="msapplication-TileColor" content="#000" />
          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content="JoyaKane" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
          {/* 一般 */}
          <meta name="application-name" content="JoyaKane" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content={description} />
          <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          {/* ogp */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:url" content="https://jk.volare.site/" />
          <meta property="og:title" content="煩悩撲滅アプリ" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://jk.volare.site/ogp.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
