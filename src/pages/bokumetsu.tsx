import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { WithRouterProps } from 'next/dist/client/with-router'
import useSound from 'use-sound'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Kleshas from '@/widgets/Kleshas'
import TempleImage from '~/assets/img/temple.png'
import utils from '~/utils'
import BellSound from '~/assets/sound/bell'
import BokumetuSound from '~/assets/sound/bokumetu'

type Props = WithRouterProps & RootState & DispatchProps

const getRandomKleshasId = () => {
  return utils.KleshasData[Math.floor(Math.random() * utils.KleshasTypeCount)].id
}

const BokumetsuPage: React.FC<Props> = (props) => {
  const [kleshasList, setKleshasList] = useState(
    Array(5)
      .fill(0)
      .map((id) => getRandomKleshasId())
  )
  const { actions, user, router } = props

  const [playBokumetuSound, bokumetuSound] = useSound(`data:audio/mp3;base64,${BokumetuSound}`, {
    autoplay: !user.isMute,
    loop: true,
    volume: 0.05,
  })

  const [playBellSound] = useSound(`data:audio/mp3;base64,${BellSound}`, {
    volume: 0.1,
  })

  const eradicatedKleshasCount = user.kleshasLogs.length
  const lastKleshasCount = utils.MaxKleshasCount - eradicatedKleshasCount
  const eradicateKleshas = (index: number, kleshasId: number) => {
    if (!user.isMute) {
      playBellSound()
    }
    while (kleshasList[index] === kleshasId) {
      kleshasList[index] = getRandomKleshasId()
    }
    if (kleshasList.length >= lastKleshasCount) {
      kleshasList[index] = -1
    }
    setKleshasList(kleshasList.concat())

    if (lastKleshasCount === 1) {
      user.kleshasLogs.push(kleshasId)
      const eradicatedKleshasRanking = utils.makeEradicatedKleshasRanking(user.kleshasLogs)
      const kleshas1 = utils.KleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[0].id))
      router.push({ pathname: `/result/${kleshas1?.id}` })
      if (!user.isMute) {
        bokumetuSound.stop()
      }
    }
  }

  return (
    <>
      <Head>
        <title>撲滅 - 煩悩撲滅アプリ</title>
        <meta property="og:image" content="https://bonno-bokumetsu-app.volare.site/ogp.jpg" />
      </Head>
      <div className="joya">
        <img className="bell" src={TempleImage} />
        <div className="kleshas-count">
          <span>あと</span>
          <br />
          <span className="number">{lastKleshasCount}</span>
          <span>回</span>
        </div>
        <div id="kleshasField">
          {kleshasList.map((kleshasId, index) => {
            const key = index * 50000 + kleshasId
            return <Kleshas key={key} actions={actions} kleshasKey={key} kleshasId={kleshasId} onClick={() => eradicateKleshas(index, kleshasId)} />
          })}
        </div>
      </div>
    </>
  )
}

export default enhancer(BokumetsuPage)
