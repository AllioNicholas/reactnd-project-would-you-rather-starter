import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'

class Leaderboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    const { users, userIds } = this.props

    return (
      <div className='center'>
        <h2>Leaderboard</h2>
        <ol className='ldb-user-list'>
          {userIds.map((id) => {
            const user = users[id]
            const answers = Object.keys(user.answers).length
            const questions = user.questions.length
            const score = answers + questions

            return (
              <li key={id}>
                <div className='ldb-user-container'>
                  <img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                  />
                  <h3>{user.name}</h3>
                  <p>Score: {score}</p>
                </div>
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
