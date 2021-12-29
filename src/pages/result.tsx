import React from 'react'
import _ from 'lodash'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
import utils from '~/utils'

type Props = WithRouterProps & RootState & DispatchProps

const ResultPage: React.FC<Props> = (props) => {
  const { user } = props

  const eradicatedKleshasRanking = _.map(_.countBy(user.kleshasLogs), (kleshasCount, kleshasId) => ({id: kleshasId, count: kleshasCount})).sort((a, b) => b.count - a.count)
  const kleshas1 = utils.kleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[0].id))
  const kleshas2 = utils.kleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[1].id))
  const kleshas3 = utils.kleshasData.find((item) => item.id === Number(eradicatedKleshasRanking[2].id))
  return (
    <div className="result">
      <h1>result page</h1>
      <div className="kleshas-result">
        <div className="result-prefix">来年は</div>
        <div className="result-motto">{kleshas1?.motto}</div>
        <div className="result-suffix">年になるでしょう</div>
      </div>
      <div className="kleshas-ranking">
        {eradicatedKleshasRanking.map((kleshasItem) => {
          const kleshas = utils.kleshasData.find((item) => item.id === Number(kleshasItem.id))
          return (
            <li key={kleshasItem.id}>
              {kleshas?.name}: {kleshasItem.count}
            </li>
          )
        })}
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
