import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Pool from './Pool'
import { handleAddAnswer } from '../actions/pools'

class PoolPage extends Component {

  handleAnswer = (e) => {
    e.preventDefault()

    const { id } = this.props
    const option = e.target.value

    this.props.dispatch(handleAddAnswer(id, option))
  }

  render() {
    const { id, thisPool, authedUser } = this.props

    if (thisPool === null) {
      return <Redirect to='/notfound' />
    }

    const poolAnswered = thisPool.optionOne.votes.includes(authedUser) || thisPool.optionTwo.votes.includes(authedUser)

    return (
      <div>
        PoolPage
        <Pool id={id} />
        {poolAnswered === false && <div>
          <button
            value='optionOne'
            onClick={this.handleAnswer}
            >
            Option one
          </button>
          <button
            value='optionTwo'
            onClick={this.handleAnswer}
            >
            Option two
          </button>
        </div>}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, pools, users }, props) {
  const { id } = props.match.params
  const thisPool = pools[id]

  return {
    id,
    authedUser,
    thisPool: thisPool ? thisPool : null
  }
}

export default connect(mapStateToProps)(PoolPage)
