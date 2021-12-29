import React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
type Props = WithRouterProps & RootState & DispatchProps

const MaxKleshasCount = 108

const BokumetsuPage: React.FC<Props> = (props) => {
  const { actions, user } = props
  const eradicateKleshas = (kleshasId: number) => {
    actions.addKleshasLog(kleshasId)
  }
  return (
    <div className="joya">
      <h1>bokumetsu page</h1>
      <div className="kleshas-count">{MaxKleshasCount - user.kleshasLogs.length}</div>
      <div className="kleshas-field">
        <div onClick={() => eradicateKleshas(1)}>1煩悩</div>
        <div onClick={() => eradicateKleshas(3)}>3煩悩</div>
      </div>
      <Link href="/result">result</Link>
    </div>
  )
}

export default enhancer(BokumetsuPage)
