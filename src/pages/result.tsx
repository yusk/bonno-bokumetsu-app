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
      <div className="kleshas-count">
        {_.map(_.countBy(user.kleshasLogs), (kleshasCount, kleshasId) => {
          return (
            <li key={kleshasId}>
              {kleshasId}: {kleshasCount}
            </li>
          )
        })}
      </div>

      <Link href="/">もう一度</Link>
    </div>
  )
}

export default enhancer(ResultPage)
