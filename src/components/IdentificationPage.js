import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'

class IdentificationPage extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <ul>
          {Object.keys(users).map((u) => (
              <li key={users[u].id}>
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
