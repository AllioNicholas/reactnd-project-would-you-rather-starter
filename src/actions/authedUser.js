export const SET_AUTHEDUSER = 'SET_AUTHEDUSER'

function setAuthedUser (id) {
  return {
    type: SET_AUTHEDUSER,
    id
  }
}

export function handleSetAuthedUser(id) {
  return (dispatch) => {
    dispatch(setAuthedUser(id))
  }
}
