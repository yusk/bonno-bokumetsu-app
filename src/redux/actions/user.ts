import { Dispatch } from 'redux'

export const addKleshasLog = (kleshasId: number) => async (dispatch: Dispatch) => {
  dispatch({
    type: 'ADD_KLESHAS_LOG',
    payload: {
      kleshasId,
    },
  })
}

export const clearKleshasLog = () => async (dispatch: Dispatch) => {
  dispatch({
    type: 'CLEAR_KLESHAS_LOG',
  })
}

export const setIsMute = (isMute: boolean) => async (dispatch: Dispatch) => {
  dispatch({
    type: 'SET_IS_MUTE',
    payload: {
      isMute,
    },
  })
}
