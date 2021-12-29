import React from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { RootState, DispatchProps } from '~/redux/types'
import enhancer from '~/redux/enhancer'
type Props = WithRouterProps & RootState & DispatchProps

const IndexPage: React.FC<Props> = (props) => {
  return <>jk front</>
}

export default enhancer(IndexPage)
