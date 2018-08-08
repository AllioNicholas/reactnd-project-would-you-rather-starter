import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'
import { performInitialTasks } from '../actions/shared'

class IdentificationPage extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  setAuthedUser = (id) => {
    this.props.dispatch(performInitialTasks(id))
  }

  render() {
    const { users } = this.props

    return (
      <div className='container'>
        <ul>
          {Object.keys(users).map((u) => (
              <li key={users[u].id} onClick={() => this.setAuthedUser(users[u].id)}>
                {users[u].name}
              </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(IdentificationPage)
