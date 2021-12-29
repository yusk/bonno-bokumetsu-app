import * as user from '../actions/user'

export type SignInInput = {
  email: string
  password: string
}

export type SignUpInput = {
  email: string
  password: string
  password_confirm: string
}

export type AuthPayload = {
  token: string
}

export type SetUserAction = {
  type: 'SET_USER'
  payload: AuthPayload
}

export type ClearUserAction = {
  type: 'CLEAR_USER'
}

export type UserDispatchProps = {
  signUp: typeof user.signUp
  signIn: typeof user.signIn
  signOut: typeof user.signOut
  loadUser: typeof user.loadUser
  forceSignIn: typeof user.forceSignIn
}

export type UserActions = SetUserAction | ClearUserAction

export type UserState = {
  isAuthed: boolean
  apiOptions: {
    headers: {
      Authorization: string
    }
  }
}
