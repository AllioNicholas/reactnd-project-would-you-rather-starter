import React, { Component } from 'react'
import { connect } from 'react-redux'

import Pool from './Pool'
import NotFound from './NotFound'
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
      return <NotFound />
    }

    const poolAnswered = thisPool.optionOne.votes.includes(authedUser) || thisPool.optionTwo.votes.includes(authedUser)
    const { optionOne, optionTwo } = thisPool

    return (
      <div className='pool-page-container'>
        <Pool id={id} />
        {poolAnswered === false && <div>
          <button
            className='btn'
            value='optionOne'
            onClick={this.handleAnswer}
            >
            {optionOne.text}
          </button>
          <button
            value='optionTwo'
            onClick={this.handleAnswer}
            className='btn'
            >
            {optionTwo.text}
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
