import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head'
import useSound from 'use-sound'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'

import LogoImage from '~/assets/img/logo.svg'
import TempleImage from '~/assets/img/temple.png'
import BellSound from '~/assets/sound/bell'
import StartSound from '~/assets/sound/start'

type Props = WithRouterProps & RootState & DispatchProps

const StartPage: React.FC<Props> = (props) => {
  const { actions, user } = props
  const [playBellSound] = useSound(`data:audio/mp3;base64,${BellSound}`, {
    volume: 0.3,
  })
  const [playStartSound, startSound] = useSound(`data:audio/mp3;base64,${StartSound}`, {
    volume: 0.2,
    autoplay: !user.isMute,
    loop: true,
  })

  useEffect(() => {
    actions.clearKleshasLog()
  }, [])

  useEffect(() => {
    if (user.isMute) {
      startSound.stop()
    } else {
      playStartSound()
    }
  }, [user.isMute])

  const onStart = () => {
    if (!user.isMute) {
      startSound.stop()
      playBellSound()
    }
  }

  return (
    <>
      <Head>
        <title>煩悩撲滅アプリ</title>
        <meta property="og:image" content="https://bonno-bokumetsu-app.volare.site/ogp.jpg" />
      </Head>
      <div className="joya start">
        {user.isMute && (
          <button type="button" onClick={() => actions.setIsMute(false)} className="sound-button">
            <i className="fa-solid fa-volume-xmark" />
          </button>
        )}
        {!user.isMute && (
          <button type="button" onClick={() => actions.setIsMute(true)} className="sound-button">
            <i className="fa-solid fa-volume-high" />
          </button>
        )}
        <h1 className="logo" style={{ backgroundImage: `url(${LogoImage})` }}>
          BonnoBokumetsuApp
        </h1>
        <img className="bell" alt="鐘" src={TempleImage} />
        <span className="button start-button" onClick={() => onStart()}>
          <Link href="/bokumetsu">開始</Link>
        </span>
      </div>
    </>
  )
}

export default enhancer(StartPage)
