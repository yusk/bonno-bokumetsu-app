import thunk from 'redux-thunk'
import { createStore, applyMiddleware, Action, Store, CombinedState } from 'redux'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import reducer from './reducers'
import { RootState } from './types'

const makeStore: MakeStore<RootState> = (initialState: any): Store<CombinedState<RootState>, Action> => {
  return createStore(reducer, initialState, applyMiddleware(thunk))
}

export default createWrapper<RootState>(makeStore, { debug: true })
