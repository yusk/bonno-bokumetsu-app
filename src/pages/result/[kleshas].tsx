import Link from 'next/link'
import React, { useEffect } from 'react'
import Head from 'next/head'
import _ from 'lodash'
import { WithRouterProps } from 'next/dist/client/with-router'
import useSound from 'use-sound'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import ResultSound from '~/assets/sound/result'

import utils from '~/utils'

type Props = WithRouterProps & RootState & DispatchProps

const ResultPage: React.FC<Props> = (props) => {
  const { user, router } = props

  const [playResultSound, resultSound] = useSound(`data:audio/mp3;base64,${ResultSound}`, {
    volume: 0.2,
    autoplay: !user.isMute && user.kleshasLogs.length,
    loop: true,
  })

  useEffect(() => {
    if (!user.kleshasLogs.length) {
      router.push({ pathname: '/' })
    }
  }, [])

  const pageKleshas = utils.KleshasData.find((item) => item.id === Number(router.query.kleshas))
  const pageUrl = `https://bonno-bokumetsu-app.volare.site`

  if (!user.kleshasLogs.length) {
    return (
      <>
        <Head>
          <title>{`${pageKleshas?.name}撲滅`} - 煩悩撲滅アプリ</title>
          <meta property="og:image" content={`${pageUrl}/${pageKleshas?.name}撲滅.png`} />
        </Head>
      </>
    )
  }

  const gameModeText = user.gameMode === 'renda' ? '連打モード' : '撲滅モード'
  const eradicatedKleshasRanking = utils.makeEradicatedKleshasRanking(user.kleshasLogs)
  const kleshas1 = utils.KleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[0].id))
  const kleshas2 = eradicatedKleshasRanking[1] ? utils.KleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[1].id)) : undefined
  const kleshas3 = eradicatedKleshasRanking[2] ? utils.KleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[2].id)) : undefined

  let tweetMessage = `2023年の煩悩を撲滅しました！(${gameModeText})%0a来年は${kleshas1?.motto}年になるでしょう。%0a🔔撲滅した欲ランキング🔔%0a%20%20%20-%201位%20${kleshas1?.name}%20${eradicatedKleshasRanking[0]?.count}個%0a`
  if (kleshas2) {
    tweetMessage += `%20%20%20-%202位%20${kleshas2?.name}%20${eradicatedKleshasRanking[1]?.count}個%0a`
  }
  if (kleshas3) {
    tweetMessage += `%20%20%20-%203位%20${kleshas3?.name}%20${eradicatedKleshasRanking[2]?.count}個%0a`
  }

  tweetMessage += `%23除夜の鐘%20%23煩悩%20%23煩悩撲滅アプリ`

  return (
    <>
      <Head>
        <title>{`${pageKleshas?.name}撲滅`} - 煩悩撲滅アプリ</title>
      </Head>
      <div className="result">
        <div className="kleshas-result">
          <div className="result-prefix">来年は</div>
          <div className="result-motto">{kleshas1?.motto}</div>
          <div className="result-suffix">年になるでしょう</div>
        </div>
        <div className="kleshas-ranking">
          <h2 className="kleshas-ranking-header">あなたの煩悩ランキング</h2>
          <div className="kleshas-ranking-body">
            {eradicatedKleshasRanking.map((kleshasItem, index) => {
              const kleshas = utils.KleshasData.find((item) => item.id === Number(kleshasItem.id))
              return (
                <li key={kleshasItem.id} className={index < 3 ? `kleshas-${index + 1}` : 'kleshas-other'}>
                  {index < 3 ? <span className="kleshas-rank">{index + 1}</span> : <></>}
                  {kleshas?.name} {kleshasItem.count}
                  <span className="count-suffix">個</span> {index >= 3 && index !== eradicatedKleshasRanking.length - 1 ? '/' : ''}
                </li>
              )
            })}
          </div>
        </div>

        <span className="button x-twitter-button">
          <a href={`https://twitter.com/intent/tweet?text=${tweetMessage}&url=${pageUrl}/result/${router.query.kleshas}/`} target="blank">
            <i className="fa-brands fa-x-twitter" />
            Twitter(現X)に投稿する
          </a>
        </span>
        <span role="button" tabIndex={0} className="button retry-button" onClick={() => resultSound.stop()} onKeyDown={() => resultSound.stop()}>
          <Link href="/">もう一度</Link>
        </span>
      </div>
    </>
  )
}

export default enhancer(ResultPage)
