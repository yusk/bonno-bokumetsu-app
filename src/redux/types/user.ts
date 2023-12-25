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

export type SetIsMutePayload = {
  isMute: boolean
}

export type SetGameModePayload = {
  gameMode: string
}

export type SetIsMuteAction = {
  type: 'SET_IS_MUTE'
  payload: SetIsMutePayload
}

export type SetGameModeAction = {
  type: 'SET_GAME_MODE'
  payload: SetGameModePayload
}

export type UserDispatchProps = {
  addKleshasLog: typeof user.addKleshasLog
  clearKleshasLog: typeof user.clearKleshasLog
  setIsMute: typeof user.setIsMute
  setGameMode: typeof user.setGameMode
}

export type UserActions = AddKleshasLogAction | ClearKleshasLogAction | SetIsMuteAction | SetGameModeAction

export type UserState = {
  isMute: boolean
  kleshasLogs: number[]
  gameMode?: string
}
