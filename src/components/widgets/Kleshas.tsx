import React, { useState, useEffect } from 'react'
import BubbleImage from '~/assets/img/bubble.svg'
import utils from '~/utils'

const kleshasWidth = 145
const kleshasHeight = 108

type Props = {
  kleshasId: number
  onClick: () => void
}

const getRandomPosition = () => {
  const kleshasField = document.getElementById('kleshasField')
  const leftMax = kleshasField?.offsetWidth
  const topMax = kleshasField?.offsetHeight
  if (!leftMax || !topMax) return {}
  const left = Math.floor(Math.random() * (leftMax - 20 - kleshasWidth)) + 10
  const top = Math.floor(Math.random() * (topMax - 20 - kleshasHeight)) + 10
  return { left, top }
}

const Kleshas: React.FC<Props> = (props) => {
  if (typeof document === 'undefined') return <></>
  const position = getRandomPosition()
  const [left, setLeft] = useState(position.left)
  const [top, setTop] = useState(position.top)
  useEffect(() => {
    const position = getRandomPosition()
    if (!left || !top) {
      setLeft(position.left)
      setTop(position.top)
    }
  }, [])
  const kleshas = utils.kleshasData.find((item) => item.id === props.kleshasId)
  if (!kleshas || !left || !top) return <></>
  return (
    <div className="kleshas" style={{ backgroundImage: `url(${BubbleImage})`, left, top }} onClick={props.onClick}>
      <span className="kleshas-text">{kleshas.name}</span>
    </div>
  )
}

export default Kleshas
