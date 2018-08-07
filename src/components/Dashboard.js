import React, { Component } from 'react'
import { connect } from 'react-redux'

import PoolList from './PoolList'
import { handleGetPools } from '../actions/pools'

class Dashboard extends Component {
  state = {
    answeredActive: false
  }

  componentDidMount() {
    this.props.dispatch(handleGetPools())
  }

  changeListToUnanswered = () => {
    this.setState(() => ({
      answeredActive: false
    }))
  }

  changeListToAswered = () => {
    this.setState(() => ({
      answeredActive: true
    }))
  }

  render() {
    const { pools, authedUser } = this.props
    const answeredPools = Object.keys(pools).filter((k) => pools[k]['optionOne']['votes'].includes(authedUser) || pools[k]['optionTwo']['votes'].includes(authedUser))
    const ununsweredPools = Object.keys(pools).filter((k) => !answeredPools.includes(k))

    return (
      <div>
        <nav>
          <ul>
            <li onClick={this.changeListToUnanswered}>
              Ununswered questions
            </li>
            <li onClick={this.changeListToAswered}>
              Answered questions
            </li>
          </ul>
        </nav>
        {this.state.answeredActive === true
        ? <PoolList ids={answeredPools}/>
        : <PoolList ids={ununsweredPools}/>}
      </div>
    )
  }
}

function mapStateToProps({ pools, authedUser }) {
  return {
    pools,
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
