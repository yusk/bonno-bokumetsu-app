import { AnyAction } from 'redux'
import { UserState, UserActions, UserDispatchProps } from './user'

export type { UserState, UserActions } from './user'
export type RootState = {
  user: UserState
}

export type RootActions = UserActions | AnyAction

export type DispatchProps = {
  actions: UserDispatchProps
}
