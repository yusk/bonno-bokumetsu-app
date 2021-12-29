import React, { useState, useEffect } from 'react'
import BubbleImage from '~/assets/img/bubble.svg'
import utils from '~/utils'

const animationMs = 200
const kleshasWidth = 145
const kleshasHeight = 108

type Props = {
  kleshasId: number
  kleshasKey: number
  onClick: () => void
}

const getRandomPosition = () => {
  const kleshasField = document.getElementById('kleshasField')
  const leftMax = kleshasField?.offsetWidth
  const topMax = kleshasField?.offsetHeight
  if (!leftMax || !topMax) return {}
  const left = Math.floor(Math.random() * (leftMax - 20 - kleshasWidth)) + 10
  const top = Math.floor(Math.random() * (topMax - 20 - kleshasHeight - 100)) + 10 + 95
  return { left, top }
}

const Kleshas: React.FC<Props> = (props) => {
  if (typeof document === 'undefined') return <></>

  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  useEffect(() => {
    const position = getRandomPosition()
    if (!left || !top) {
      setLeft(position.left || 0)
      setTop(position.top || 0)
    }
  }, [])
  const kleshas = utils.kleshasData.find((item) => item.id === props.kleshasId)
  if (!kleshas || !left || !top) return <></>

  const onClick = () => {
    const thisDom = document.getElementById('kleshas' + props.kleshasKey)
    thisDom?.classList.add('eradicating')
    thisDom?.animate(
      [
        {
          opacity: thisDom?.style.opacity,
          transform: 'scale(0.8)',
          filter: `blur(0)`,
        },
        {
          opacity: 0,
          transform: 'scale(1.5)',
          filter: `blur(10px)`,
        },
      ],
      {
        fill: 'forwards',
        duration: animationMs,
      }
    )
    setTimeout(() => {
      props.onClick()
    }, animationMs)
  }

  return (
    <div id={'kleshas' + props.kleshasKey} className="kleshas" style={{ backgroundImage: `url(${BubbleImage})`, left, top }} onClick={() => onClick()}>
      <span className="kleshas-text">{kleshas.name}</span>
    </div>
  )
}

export default Kleshas
