import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'

class IdentificationPage extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    return (
      <div>
        Identification page
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
