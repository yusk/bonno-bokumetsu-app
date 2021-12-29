import React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
type Props = WithRouterProps & RootState & DispatchProps

const IndexPage: React.FC<Props> = (props) => {
  return <>
    <h1>index page</h1>
    <Link href="/bokumetsu">bokumetsu</Link>
  </>
}

export default enhancer(IndexPage)
