import { GET_POOLS, ADD_POOL, ADD_ANSWER } from '../actions/pools'

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
    case ADD_ANSWER :
      const { authedUser, qid, answer } = action.pool
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}
