import React, { useEffect } from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
import BgJoyaImage from '~/assets/img/bg_joya.jpg'
import LogoImage from '~/assets/img/logo.svg'
type Props = WithRouterProps & RootState & DispatchProps

const IndexPage: React.FC<Props> = (props) => {
  const { actions } = props
  useEffect(() => {
    actions.clearKleshasLog()
  }, [])

  return (
    <div className="joya">
      <h1 className="logo" style={{ backgroundImage: `url(${LogoImage})` }}>
        BonnoBokumetsuApp
      </h1>
      <h1 className="logo" style={{ backgroundImage: `url(${BgJoyaImage})` }}>
        BonnoBokumetsuApp
      </h1>
      <span className="button start-button"><Link href="/bokumetsu">開始</Link></span>
    </div>
  )
}

export default enhancer(IndexPage)
