import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { users, userIds } = this.props

    return (
      <div>
        Leaderboard
        <ol>
          {userIds.map((id) => {
            const user = users[id]
            const answers = Object.keys(user.answers).length
            const questions = user.questions.length
            const score = answers + questions

            return (
              <li key={id}>
                <h3>{user.name}</h3>
                <p>Score: {score} (Q:{questions} + A:{answers})</p>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    userIds: Object.keys(users).sort((a,b) => {
      const userA = users[a]
      const userB = users[b]

      const answersA = Object.keys(userA.answers).length
      const answersB = Object.keys(userB.answers).length
      
      const questionsA = userA.questions.length
      const questionsB = userB.questions.length

      const scoreA = answersA + questionsA
      const scoreB = answersB + questionsB

      return scoreA < scoreB
    })
  }
}

export default connect(mapStateToProps)(Leaderboard)
