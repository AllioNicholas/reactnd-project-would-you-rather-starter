import { GET_POOLS, ADD_POOL } from '../actions/pools'

export default function pools (state = {}, action) {
  switch (action.type) {
    case GET_POOLS :
      return {
        ...state,
        ...action.pools
      }
    case ADD_POOL :
      const { pool } = action
      return {
        ...state,
        [pool.id] : pool
      }
    default:
      return state
  }
}
