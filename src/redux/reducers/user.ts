import utils from '~/utils'
import { UserState, UserActions } from '../types'

const initialState: UserState = {
  kleshasLogs: [],
}

const User = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case 'ADD_KLESHAS_LOG':
      let kleshasLogs = state.kleshasLogs
      if (state.kleshasLogs.length < utils.MaxKleshasCount) {
        kleshasLogs = state.kleshasLogs.concat([action.payload.kleshasId])
      }
      return {
        ...state,
        kleshasLogs,
      }
    case 'CLEAR_KLESHAS_LOG':
      return {
        ...state,
        kleshasLogs: [],
      }
    default:
      return state
  }
}

export default User
