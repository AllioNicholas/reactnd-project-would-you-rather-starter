import React, { Component } from 'react'

import PoolList from './PoolList'

class Dashboard extends Component {
  state = {
    answeredActive: false
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
        ? <PoolList />
        : <PoolList />}
      </div>
    )
  }
}

export default Dashboard
