import React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
import Kleshas from '@/widgets/Kleshas'
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
        <Kleshas kleshasId={1} onClick={() => eradicateKleshas(1)} />
        <Kleshas kleshasId={3} onClick={() => eradicateKleshas(3)} />
      </div>
      <Link href="/result">result</Link>
    </div>
  )
}

export default enhancer(BokumetsuPage)
