import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pool from './Pool'

class PoolList extends Component {
  render() {
    const { ids } = this.props

    return(
      <div className='center'>
        <ul>
          {ids.map((i) => (
              <li key={i}>
                <Pool id={i} />
              </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ pools }, { ids }) {
  return {
    pools,
    ids : ids.sort((a,b) => pools[b].timestamp - pools[a].timestamp),
  }
}

export default connect(mapStateToProps)(PoolList)
