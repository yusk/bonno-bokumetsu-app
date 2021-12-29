import React from 'react'

type Props = {
  kleshasId: number
}

const Kleshas: React.FC<Props> = (props) => {
  return <div className="kleshas">煩悩{props.kleshasId}</div>
}

export default Kleshas
