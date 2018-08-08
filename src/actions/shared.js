import { handleGetPools } from './pools'
import { handleSetAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function performInitialTasks(id) {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(handleSetAuthedUser(id))
    dispatch(handleGetPools())
    dispatch(hideLoading())
  }
}
