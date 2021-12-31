import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { useRouter } from 'next/router'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx)
  }

  render() {
    const description =
      'ランダムに表示される様々な煩悩をタップして、気の向くままに煩悩を撲滅するゲームです。年の瀬に今年一年の煩悩を撲滅して、清き心で新年を迎えよう！'

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap" rel="stylesheet" />
          {/* windows */}
          <meta name="msapplication-square70x70logo" content="/site-tile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/site-tile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="/site-tile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="/site-tile-310x310.png" />
          <meta name="msapplication-TileColor" content="#000" />
          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content="煩悩撲滅アプリ" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
          {/* 一般 */}
          <meta name="application-name" content="煩悩撲滅アプリ" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content={description} />
          <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="manifest" href="/manifest.json" />
          {/* ogp */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:url" content="https://bonno-bokumetsu-app.volare.site/" />
          <meta property="og:title" content="欲を除いて清き新年を迎えよう - 煩悩撲滅アプリ" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://bonno-bokumetsu-app.volare.site/ogp.jpg" />
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
