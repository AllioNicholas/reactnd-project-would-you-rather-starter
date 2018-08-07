import * as API from './../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_POOLS = 'GET_POOLS'
export const ADD_POOL = 'ADD_POOL'
export const ADD_ANSWER = 'ADD_ANSWER'

function getPools(pools) {
  return {
    type: GET_POOLS,
    pools
  }
}

export function handleGetPools() {
  return (dispatch) => {
    dispatch(showLoading())

    return API._getQuestions()
      .then((pools) => {
        dispatch(getPools(pools))
        dispatch(hideLoading())
      })
      .catch(() => alert('There was an error retrieving pools. Try again.'))
  }
}

// function addPool(pool) {
//   return {
//     type: ADD_POOL,
//     pool
//   }
// }
//
// export function handleAddPool(pool) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState()
//
//     dispatch(showLoading)
//
//   }
// }
