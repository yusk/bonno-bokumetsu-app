import React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import enhancer from '~/redux/enhancer'

type Props = WithRouterProps

const Header: React.FC<Props> = (props) => {
  const { router } = props

  return <header className="">header</header>
}

export default enhancer(Header)
