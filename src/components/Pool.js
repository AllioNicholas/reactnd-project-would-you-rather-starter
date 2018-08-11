import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NotFound from './NotFound'

class Pool extends Component {
  render() {
    const { pool, authorUser, authedUser } = this.props

    if (pool === null) {
      return <NotFound />
    }

    const { id, optionOne, optionTwo } = pool
    const { name, avatarURL } = authorUser

    const optionOneChoosen = optionOne.votes.includes(authedUser)
    const optionTwoChoosen = optionTwo.votes.includes(authedUser)
    const poolAnswered = optionOneChoosen || optionTwoChoosen
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes

    return(
      <Link to={`/questions/${id}`} className='pool'>
        <div className='author-container'>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <h5>{name}</h5>
        </div>
        <div className='options-container'>
          <h3 className='pool-title'>Would You Rather</h3>
          <ul className='options-list'>
            <li key='optionOne' className={optionOneChoosen ? 'option-choosen' : 'option'}>
                <p>{optionOne.text}</p>
                <span>{poolAnswered &&
                  <p>Votes: {optionOneVotes} • <span className='percentage'>{(optionOneVotes / totalVotes * 100).toFixed(2)} %</span></p>}</span>
            </li>
            <li key='optionTwo' className={optionTwoChoosen ? 'option-choosen' : 'option'}>
              <p>{optionTwo.text}</p>
              {poolAnswered &&
                <p>Votes: {optionTwoVotes} • <span className='percentage'>{(optionTwoVotes / totalVotes * 100).toFixed(2)} %</span></p>}
            </li>
          </ul>
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
