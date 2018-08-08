import * as API from './../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_POOLS = 'GET_POOLS'
export const ADD_POOL = 'ADD_POOL'
export const ADD_ANSWER = 'ADD_ANSWER'

function addAnswer(pool) {
  return {
    type: ADD_ANSWER,
    pool
  }
}

export function handleAddAnswer(id, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    const poolAnswer = {
      authedUser,
      qid: id,
      answer: option
    }

    return API._saveQuestionAnswer(poolAnswer)
      .then(() => {
        dispatch(addAnswer(poolAnswer))
        dispatch(hideLoading())
      })
      .catch(() => alert('There was an error saving your answer. Try again.'))
  }
}

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

function addPool(pool) {
  return {
    type: ADD_POOL,
    pool
  }
}

export function handleAddPool(pool) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    const newPool = {
      ...pool,
      author: authedUser
    }

    return API._saveQuestion(newPool)
      .then((pool) => dispatch(addPool(pool)))
      .then(() => dispatch(hideLoading()))
      .catch(() => alert('There was an error saving your pool. Try again.'))
  }
}
