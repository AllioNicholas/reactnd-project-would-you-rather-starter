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
      <div className='identification-container'>
        <h3 className='identification-title'>Select a user</h3>
        <div className="user-changer">
          <select className='user-selector' onChange={(event) => this.setAuthedUser(event.target.value)}>
            <option value="" defaultValue>Select user</option>
            {Object.keys(users).map((u) => (
                <option key={users[u].id} value={users[u].id}>{users[u].name}</option>
            ))}
          </select>
        </div>
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
