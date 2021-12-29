import { connect, ConnectedComponent } from 'react-redux'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { withRouter } from 'next/router'
import { RootActions } from './types'

import actions from './actions'

const mapState = (state: any) => ({ ...state })

const mapDispatch = (dispatch: Dispatch<RootActions>) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default compose(connect(mapState, mapDispatch), withRouter) as <T>(...args: any[]) => ConnectedComponent<any, T>
