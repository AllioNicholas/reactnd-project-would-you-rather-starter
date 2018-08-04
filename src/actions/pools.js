import * as API from './../utils/_DATA'
// import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_POOLS = 'GET_POOLS'
export const ADD_POOL = 'ADD_POOL'
export const ADD_ANSWER = 'ADD_ANSWER'

export function getPools(pools) {
  return {
    type: GET_POOLS,
    tweets
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
