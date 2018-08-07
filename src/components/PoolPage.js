import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pool from './Pool'

class PoolPage extends Component {
  render() {
    const { id } = this.props
    return (
      <div>
        PoolPage
        <Pool id={id} />
      </div>
    )
  }
}

function mapStateToProps({ authedUser, pools }, props) {
  const { id } = props.match.params

  return {
    id
  }
}

export default connect(mapStateToProps)(PoolPage)
