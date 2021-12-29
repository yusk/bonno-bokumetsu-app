import { UserState, UserActions } from '../types'

const initialState: UserState = {
  isAuthed: false,
  apiOptions: {
    headers: {
      Authorization: '',
    },
  },
}

const user = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case 'SET_USER':
      localStorage.setItem('userToken', action.payload.token)
      return {
        ...state,
        isAuthed: true,
        apiOptions: {
          headers: {
            Authorization: 'JWT ' + action.payload.token,
          },
        },
      }
    case 'CLEAR_USER':
      localStorage.removeItem('userToken')
      return {
        ...state,
        isAuthed: false,
        apiOptions: {
          headers: {
            Authorization: '',
          },
        },
      }
    default:
      return state
  }
}

export default user
