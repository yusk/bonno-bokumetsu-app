import { combineReducers } from 'redux'
import { reducer as ReduxReducer } from 'redux-form'
import user from './user'

const reducer = combineReducers({
  form: ReduxReducer,
  user,
})

export default reducer
