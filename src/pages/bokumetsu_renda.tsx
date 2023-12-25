import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import { WithRouterProps } from 'next/dist/client/with-router'
import useSound from 'use-sound'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Kleshas from '@/widgets/Kleshas'
import TempleImage from '~/assets/img/temple.png'
import KaneImage from '~/assets/img/kane.png'
import utils from '~/utils'
import BellSound from '~/assets/sound/bell'
import BokumetuSound from '~/assets/sound/bokumetu'

type Props = WithRouterProps & RootState & DispatchProps

const getRandomKleshasId = () => {
  return utils.KleshasData[Math.floor(Math.random() * utils.KleshasTypeCount)].id
}

const BokumetsuPage: React.FC<Props> = (props) => {
  const [kleshasList, setKleshasList] = useState(Array(utils.MaxDisplayKleshasCount).fill(-1))
  const kleshasListRef = useRef(Array(utils.MaxDisplayKleshasCount).fill(-1))
  const kleshasTimerIdListRef = useRef(Array(utils.MaxDisplayKleshasCount).fill(-1))
  const { actions, user, router } = props

  const [playBokumetuSound, bokumetuSound] = useSound(`data:audio/mp3;base64,${BokumetuSound}`, {
    autoplay: !user.isMute,
    loop: true,
    volume: 0.05,
  })

  const [playBellSound] = useSound(`data:audio/mp3;base64,${BellSound}`, {
    volume: 0.1,
  })

  const clearTimer = (index: number) => {
    if (kleshasTimerIdListRef.current[index]) {
      clearTimeout(kleshasTimerIdListRef.current[index])
      kleshasTimerIdListRef.current[index] = null
    }
  }

  const refreshKleshas = (index: number, kleshasId: number) => {
    if (kleshasTimerIdListRef.current[index]) {
      clearTimeout(kleshasTimerIdListRef.current[index])
    }

    while (kleshasListRef.current[index] === kleshasId) {
      kleshasListRef.current[index] = getRandomKleshasId()
    }

    const kleshasTimerId = setTimeout(() => {
      refreshKleshas(index, kleshasListRef.current[index])
    }, 4000)

    kleshasTimerIdListRef.current[index] = kleshasTimerId

    setKleshasList(kleshasListRef.current.concat())
  }

  const eradicatedKleshasCount = user.kleshasLogs.length
  const lastKleshasCount = utils.MaxKleshasCount - eradicatedKleshasCount

  const eradicateKleshas = (index: number, kleshasId: number) => {
    if (!user.isMute) {
      playBellSound()
    }
    if (kleshasList.length >= lastKleshasCount) {
      clearTimeout(kleshasTimerIdListRef.current[index])
      kleshasListRef.current[index] = -1
      setKleshasList(kleshasListRef.current.concat())
    } else {
      refreshKleshas(index, kleshasId)
    }

    if (lastKleshasCount === 1) {
      kleshasListRef.current = Array(utils.MaxDisplayKleshasCount).fill(-1)
      setKleshasList(kleshasListRef.current.concat())
      user.kleshasLogs.push(kleshasId)
      const eradicatedKleshasRanking = utils.makeEradicatedKleshasRanking(user.kleshasLogs)
      const kleshas1 = utils.KleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[0].id))
      router.push({ pathname: `/result/${kleshas1?.id}` })
      if (!user.isMute) {
        bokumetuSound.stop()
      }
    }
  }

  const eradicateKleshasRenda = () => {
    const kleshasElements = document.getElementsByClassName('kleshas')
    const kleshasElement = kleshasElements[Math.floor(Math.random() * kleshasElements.length)] as HTMLElement
    if (kleshasElement) {
      kleshasElement.click()
      return
    }
    if (!user.isMute) {
      playBellSound()
    }
  }

  useEffect(() => {
    const initialize = async () => {
      for (let index = 0; index < utils.MaxDisplayKleshasCount; index += 1) {
        refreshKleshas(index, kleshasList[index])
        // eslint-disable-next-line no-await-in-loop
        await utils.wait(400)
      }
    }
    initialize()
  }, [])

  return (
    <>
      <Head>
        <title>撲滅 - 煩悩撲滅アプリ</title>
        <meta property="og:image" content="https://bonno-bokumetsu-app.volare.site/ogp.jpg" />
      </Head>
      <div className="joya">
        <img className="bell" alt="寺" src={TempleImage} />
        <div className="kleshas-count">
          <span>あと</span>
          <br />
          <span className="number">{lastKleshasCount}</span>
          <span>回</span>
        </div>
        <div id="kleshasField" className="narrow-field">
          {kleshasList.map((kleshasId, index) => {
            const key = index * 50000 + kleshasId
            return (
              <Kleshas
                key={key}
                actions={actions}
                kleshasKey={key}
                kleshasId={kleshasId}
                clearTimer={() => clearTimer(index)}
                onClick={() => eradicateKleshas(index, kleshasId)}
              />
            )
          })}
        </div>
        <div className="kleshas-footer">
          <span role="button" tabIndex={0} className="kane-button" onClick={() => eradicateKleshasRenda()} onKeyDown={() => eradicateKleshasRenda()}>
            <img className="kane" alt="鐘" src={KaneImage} />
          </span>
        </div>
      </div>
    </>
  )
}

export default enhancer(BokumetsuPage)
