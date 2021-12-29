import React from 'react'
import BubbleImage from '~/assets/img/bubble.svg'
import utils from '~/utils'

type Props = {
  kleshasId: number
  onClick: () => void
}

const Kleshas: React.FC<Props> = (props) => {
  const kleshas = utils.kleshasData.find(item => item.id === props.kleshasId)
  if (!kleshas) return <></>
  return <div className="kleshas" style={{ backgroundImage: `url(${BubbleImage})` }} onClick={props.onClick}><span className="kleshas-text">{kleshas.name}</span></div>
}

export default Kleshas
