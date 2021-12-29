import React, { useState } from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Kleshas from '@/widgets/Kleshas'
import TempleImage from '~/assets/img/temple.png'
import utils from '~/utils'
type Props = WithRouterProps & RootState & DispatchProps

const getRandomKleshasId = () => {
  return Math.floor(Math.random() * utils.allKleshasCount)
}

const MaxKleshasCount = 108

const BokumetsuPage: React.FC<Props> = (props) => {
  const [kleshasList, setKleshasList] = useState(
    Array(5)
      .fill(0)
      .map((id) => getRandomKleshasId())
  )
  const { actions, user, router } = props
  const eradicatedKleshasCount = user.kleshasLogs.length
  const lastKleshasCount = MaxKleshasCount - eradicatedKleshasCount
  const eradicateKleshas = (index: number, kleshasId: number) => {
    actions.addKleshasLog(kleshasId)
    while (kleshasList[index] === kleshasId) {
      kleshasList[index] = getRandomKleshasId()
    }
    if (kleshasList.length >= lastKleshasCount) {
      kleshasList[index] = -1
    }
    setKleshasList(kleshasList)

    if (lastKleshasCount === 1) {
      router.push({ pathname: '/result' })
    }
  }
  return (
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
          return <Kleshas key={index * (utils.allKleshasCount + 10) + kleshasId} kleshasId={kleshasId} onClick={() => eradicateKleshas(index, kleshasId)} />
        })}
      </div>
    </div>
  )
}

export default enhancer(BokumetsuPage)
