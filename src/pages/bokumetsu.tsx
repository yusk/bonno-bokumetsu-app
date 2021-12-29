import React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
type Props = WithRouterProps & RootState & DispatchProps

const BokumetsuPage: React.FC<Props> = (props) => {
  return <>
    <h1>bokumetsu page</h1>
    <Link href="/result">result</Link>
  </>
}

export default enhancer(BokumetsuPage)
