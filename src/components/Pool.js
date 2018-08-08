import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Pool extends Component {
  render() {
    const { pool, authorUser, authedUser } = this.props

    if (pool === null) {
      return <Redirect to='/notfound' />
    }

    const { id, optionOne, optionTwo } = pool
    const { name, avatarURL } = authorUser

    const poolAnswered = optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes

    return(
      <Link to={`/questions/${id}`} className='pool'>
        <h3 className='center'>Would You Rather</h3>
        <div className='author-container'>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <h5>{name}</h5>
        </div>
        <div className='options-container'>
          <div className='option'>
            <p>{optionOne.text}</p>
            {poolAnswered && <div>
              <p>Votes: {optionOneVotes}</p>
              <p className='percentage'>{(optionOneVotes / totalVotes * 100).toFixed(2)} %</p>
            </div>}
          </div>
          <div className='option'>
            <p>{optionTwo.text}</p>
            {poolAnswered && <div>
              <p>Votes: {optionTwoVotes}</p>
              <p className='percentage'>{(optionTwoVotes / totalVotes * 100).toFixed(2)} %</p>
            </div>}
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps({ users, pools, authedUser }, { id }) {
  const pool = pools[id]
  const authorUser = users[pool.author]

  return {
    authedUser,
    authorUser,
    pool: pool ? pool : null
  }
}

export default connect(mapStateToProps)(Pool)
