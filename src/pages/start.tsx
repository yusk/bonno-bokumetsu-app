import React, { useEffect } from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
import LogoImage from '~/assets/img/logo.svg'
import TempleImage from '~/assets/img/temple.png'
type Props = WithRouterProps & RootState & DispatchProps

const StartPage: React.FC<Props> = (props) => {
  const { actions } = props
  useEffect(() => {
    actions.clearKleshasLog()
  }, [])

  return (
    <>
      <Head>
        <title>煩悩撲滅アプリ</title>
        <meta property="og:image" content="https://bonno-bokumetsu-app.volare.site/ogp.jpg" />
      </Head>
      <div className="joya start">
        <h1 className="logo" style={{ backgroundImage: `url(${LogoImage})` }}>
          BonnoBokumetsuApp
        </h1>
        <img className="bell" src={TempleImage} />
        <span className="button start-button">
          <Link href="/bokumetsu">開始</Link>
        </span>
      </div>
    </>
  )
}

export default enhancer(StartPage)
