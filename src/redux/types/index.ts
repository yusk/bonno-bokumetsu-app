import { AnyAction } from 'redux'
import { UserState, UserActions, UserDispatchProps } from './user'

export type { SignInInput, SignUpInput, AuthPayload, UserState, UserActions } from './user'
export type RootState = {
  form: any
  user: UserState
}

export type RootActions = UserActions | AnyAction

export type DispatchProps = {
  actions: UserDispatchProps
}
