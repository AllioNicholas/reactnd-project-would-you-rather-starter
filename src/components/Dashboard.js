import React, { Component } from 'react'
import { connect } from 'react-redux'

import PoolList from './PoolList'
import { handleGetPools } from '../actions/pools'

// Fake data
const poolsOne = [
  {
    id:1,
    name: 'Pool 1'
  },
  {
    id:2,
    name: 'Pool 2'
  }
]

const poolsTwo = [
  {
    id:3,
    name: 'Pool 3'
  }
]

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
        ? <PoolList pools={poolsOne}/>
        : <PoolList pools={poolsTwo}/>}
      </div>
    )
  }
}

export default connect()(Dashboard)
