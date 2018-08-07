import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import authedUser from './authedUser'
import users from './users'
import pools from './pools'

export default combineReducers({
  authedUser,
  users,
  pools,
  loadingBar: loadingBarReducer
})
