import { Dispatch } from 'redux'
import { Instance } from '~/api'
import { SignInInput, SignUpInput } from '../types'
import { SetUserAction, ClearUserAction } from '../types/user'

export const signUp =
  ({ email, password, password_confirm }: SignUpInput) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await Instance.post('/api/register/user/', {
        email,
        password,
        password_confirm,
      })
      await signIn({ email, password })(dispatch)
    } catch (err: any) {
      console.log('err: ', err)
      throw err
    }
  }

export const signIn =
  ({ email, password }: SignInInput) =>
  async (dispatch: Dispatch<SetUserAction>) => {
    let res, token
    try {
      res = await Instance.post('/api/auth/user/', {
        email,
        password,
      })
      token = res.data.token
    } catch (err: any) {
      console.log('err: ', err)
      throw err
    }
    dispatch({
      type: 'SET_USER',
      payload: {
        token,
      },
    })
  }

export const signOut = () => async (dispatch: Dispatch<ClearUserAction>) => {
  dispatch({ type: 'CLEAR_USER' })
}

export const loadUser = () => async (dispatch: Dispatch<SetUserAction | ClearUserAction>) => {
  let res,
    token = localStorage.getItem('userToken')
  if (!token) return
  try {
    res = await Instance.post('/api/auth/refresh/', {
      token,
    })
    token = res.data.token
  } catch (err: any) {
    dispatch({ type: 'CLEAR_USER' })
    return
  }

  dispatch({
    type: 'SET_USER',
    payload: {
      token: token!,
    },
  })
}

export const forceSignIn = () => async (dispatch: Dispatch<SetUserAction>) => {
  dispatch({
    type: 'SET_USER',
    payload: {
      token: 'token',
    },
  })
}
