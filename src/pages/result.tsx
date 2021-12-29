import React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
import Link from 'next/link'
type Props = WithRouterProps & RootState & DispatchProps

const ResultPage: React.FC<Props> = (props) => {
  return <>
  <h1>result page</h1>
  <Link href="/">index</Link>
</>
}

export default enhancer(ResultPage)
