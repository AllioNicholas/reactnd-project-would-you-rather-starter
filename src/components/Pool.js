import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Pool extends Component {
  render() {
    const { pool } = this.props

    if (pool === null) {
      return <Redirect to='/notfound' />
    }

    const { id, author, timestamp, optionOne, optionTwo } = pool

    return(
      <Link to={`/questions/${id}`}>
        <p>{id}</p>
        <p>{author}</p>
        <p>{timestamp}</p>
      </Link>
    )
  }
}

function mapStateToProps({ pools }, { id }) {
  const pool = pools[id]

  return {
    pool: pool ? pool : null
  }
}

export default connect(mapStateToProps)(Pool)
