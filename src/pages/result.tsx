import React from 'react'
import _ from 'lodash'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
type Props = WithRouterProps & RootState & DispatchProps

const ResultPage: React.FC<Props> = (props) => {
  const { user } = props

  return (
    <div className="result">
      <h1>result page</h1>
      <div className="kleshas-ranking">
        {_.map(_.countBy(user.kleshasLogs), (kleshasCount, kleshasId) => {
          return (
            <li key={kleshasId}>
              {kleshasId}: {kleshasCount}
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
