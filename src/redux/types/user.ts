import * as user from '../actions/user'

export type AddKleshasLogPayload = {
  kleshasId: number
}

export type AddKleshasLogAction = {
  type: 'ADD_KLESHAS_LOG'
  payload: AddKleshasLogPayload
}

export type ClearKleshasLogAction = {
  type: 'CLEAR_KLESHAS_LOG'
}

export type UserDispatchProps = {
  addKleshasLog: typeof user.addKleshasLog
  clearKleshasLog: typeof user.clearKleshasLog
}

export type UserActions = AddKleshasLogAction | ClearKleshasLogAction

export type UserState = {
  kleshasLogs: number[]
}
