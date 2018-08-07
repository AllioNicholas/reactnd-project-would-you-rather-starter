import { GET_POOLS } from '../actions/pools'

export default function pools (state = {}, action) {
  switch (action.type) {
    case GET_POOLS :
      return {
        ...state,
        ...action.pools
      }
    default:
      return state
  }
}
