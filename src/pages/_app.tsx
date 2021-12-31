import React from 'react'
import Head from 'next/head'
import App, { AppContext } from 'next/app'
import { Provider, ReactReduxContext } from 'react-redux'
import { WithRouterProps } from 'next/dist/client/with-router'
import '../styles/index.scss'
import wrapper from '~/redux/store'
import enhancer from '~/redux/enhancer'
import Layout from '@/layout/index'
import { RootState, DispatchProps } from '~/redux/types'
import utils from '~/utils'

type Props = WithRouterProps & RootState & DispatchProps

type State = {}

class MyApp extends App<Props, {}, State> {
  constructor(props: any) {
    super(props)
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  async componentDidMount() {
    utils.startAdjustOnResize()
  }

  async componentDidUpdate() {}

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Provider store={store}>
            {router.route === '/' &&
              <Head>
                <title>煩悩撲滅アプリ</title>
                <meta property="twitter:image" content="https://bonno-bokumetsu-app.volare.site/ogp.jpg" />
              </Head>
            }
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        )}
      </ReactReduxContext.Consumer>
    )
  }
}

export default wrapper.withRedux(enhancer(MyApp))
