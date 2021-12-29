import React, { useEffect } from 'react'
import _ from 'lodash'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
import utils from '~/utils'

type Props = WithRouterProps & RootState & DispatchProps

const ResultPage: React.FC<Props> = (props) => {
  const { user, router } = props

  useEffect(() => {
    if (!user.kleshasLogs.length) {
      router.push({ pathname: '/' })
    }
  }, [])
  if (!user.kleshasLogs.length) {
    return <></>
  }

  const eradicatedKleshasRanking = _.map(_.countBy(user.kleshasLogs), (kleshasCount, kleshasId) => ({id: kleshasId, count: kleshasCount})).sort((a, b) => b.count - a.count)
  const kleshas1 = utils.kleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[0].id))
  console.log('eradicatedKleshasRanking', eradicatedKleshasRanking)
  return (
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
            const kleshas = utils.kleshasData.find((item) => item.id === Number(kleshasItem.id))
            return (
              <li key={kleshasItem.id} className={index < 3 ? 'kleshas-' + (index + 1) : 'kleshas-other'}>
                {index < 3 ? <span className="kleshas-rank">{index + 1}</span> : <></>}
                {kleshas?.name} {kleshasItem.count}個 {(3 <= index && index !== eradicatedKleshasRanking.length - 1) ? '/' : ''}
              </li>
            )
          })}
        </div>
      </div>

      <span className="button twitter-button">
        <a href="https://twitter.com/intent/tweet?text=aaaaa&url=image_url" target="blank">
          <i className="fab fa-twitter" />
          Twitterに投稿する
        </a>
      </span>
      <span className="button retry-button">
        <Link href="/">もう一度</Link>
      </span>
    </div>
  )
}

export default enhancer(ResultPage)
