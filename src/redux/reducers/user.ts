import utils from '~/utils'
import { UserState, UserActions } from '../types'

const initialState: UserState = {
  isMute: false,
  kleshasLogs: [],
}

const User = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case 'ADD_KLESHAS_LOG': {
      let { kleshasLogs } = state
      if (state.kleshasLogs.length < utils.MaxKleshasCount) {
        kleshasLogs = state.kleshasLogs.concat([action.payload.kleshasId])
      }
      return {
        ...state,
        kleshasLogs,
      }
    }
    case 'CLEAR_KLESHAS_LOG':
      return {
        ...state,
        kleshasLogs: [],
      }
    case 'SET_IS_MUTE':
      return {
        ...state,
        isMute: action.payload.isMute,
      }
    case 'SET_GAME_MODE':
      return {
        ...state,
        gameMode: action.payload.gameMode,
      }
    default:
      return state
  }
}

export default User
